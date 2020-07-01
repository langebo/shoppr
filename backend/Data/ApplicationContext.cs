using Microsoft.EntityFrameworkCore;
using ShoppR.Models.Entities;

namespace ShoppR.Data
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Demand> Demands { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(e => 
                e.HasMany<Demand>()
                 .WithOne(d => d.User)
                 .HasForeignKey(d => d.UserId)
                 .OnDelete(DeleteBehavior.Cascade));

            modelBuilder.Entity<Product>(e =>
                e.HasMany<Demand>()
                 .WithOne(d => d.Product)
                 .HasForeignKey(d => d.ProductId)
                 .OnDelete(DeleteBehavior.Cascade));
        }
    }
}