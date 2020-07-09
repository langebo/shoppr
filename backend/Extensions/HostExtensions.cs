using System;
using System.Linq;
using Bogus;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Polly;
using ShoppR.Data;
using ShoppR.Models.Entities;

namespace ShoppR.Extensions
{
    public static class HostExtensions
    {
        public static IHost Migrate<TContext>(this IHost host) where TContext : DbContext
        {
            using var scope = host.Services.CreateScope();
            var db = scope.ServiceProvider.GetService<TContext>();
            var logger = host.Services.GetService<ILogger<IHost>>();

            Policy
                .Handle<Exception>()
                .WaitAndRetry(5, retry => TimeSpan.FromSeconds(retry * 5),
                    (ex, ts) => logger.LogCritical(ex, $"Unable to migrate database, retrying in {ts}"))
                .Execute(() => db.Database.Migrate());

            return host;
        }

        public static IHost Seed(this IHost host)
        {
            using var scope = host.Services.CreateScope();
            var db = scope.ServiceProvider.GetService<ApplicationContext>();

            if (db.Users.Any()) return host;

            var users = new Faker<User>()
                .StrictMode(true)
                .RuleFor(u => u.Id, f => Guid.NewGuid())
                .RuleFor(u => u.Email, f => f.Person.Email)
                .RuleFor(u => u.FirstName, f => f.Person.FirstName)
                .RuleFor(u => u.Surname, f => f.Person.LastName)
                .Generate(12);

            var products = new Faker<Product>()
                .StrictMode(true)
                .RuleFor(p => p.Id, f => Guid.NewGuid())
                .RuleFor(p => p.Title, f => f.Commerce.ProductName())
                .Generate(78);

            var demands = new Faker<Demand>()
                .RuleFor(d => d.Id, f => Guid.NewGuid())
                .RuleFor(d => d.CreatedAt, f => f.Date.Between(DateTime.UtcNow.AddYears(-2), DateTime.UtcNow))
                .RuleFor(d => d.ProductId, f => f.PickRandom(products).Id)
                .RuleFor(d => d.UserId, f => f.PickRandom(users).Id)
                .Generate(312);

            db.Users.AddRange(users);
            db.Products.AddRange(products);
            db.Demands.AddRange(demands);

            db.SaveChanges();

            return host;
        }
    }
}