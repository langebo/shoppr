using System;
using HotChocolate;
using HotChocolate.AspNetCore;
using HotChocolate.Execution.Configuration;
using HotChocolate.Types;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ShoppR.Business;
using ShoppR.Business.Types;
using ShoppR.Data;
using ShoppR.Settings;

namespace ShoppR
{
    public class Startup
    {
        private readonly IConfiguration config;

        public Startup(IConfiguration cfg) => config = cfg;

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddOptions<AppSettings>().Bind(config);
            services.AddDbContext<ApplicationContext>(options =>
                options.UseNpgsql(config.GetConnectionString("Postgres")));

            services.AddGraphQL(SchemaBuilder.New()
                .EnableRelaySupport()
                .AddQueryType<Query>()
                .AddType<UserType>()
                .AddType<ProductType>()
                .AddType<DemandType>()
                .BindClrType<Guid, IdType>()
                .BindClrType<DateTime, DateTimeType>()
                .Create(), new QueryExecutionOptions { ForceSerialExecution = true });

            services.AddCors();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseCors(cors => cors
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod());

            app.UseRouting();
            app.UseWebSockets();
            app.UseGraphQL();
        }
    }
}
