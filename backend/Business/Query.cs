using System.Linq;
using HotChocolate;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Microsoft.EntityFrameworkCore;
using ShoppR.Data;
using ShoppR.Models.Entities;

namespace ShoppR.Business
{
    public class Query
    {
        [UsePaging]
        [UseSelection]
        [UseFiltering]
        [UseSorting]
        public IQueryable<User> GetUsers([Service] ApplicationContext db) =>
            db.Users.AsNoTracking();

        [UsePaging]
        [UseSelection]
        [UseFiltering]
        [UseSorting]
        public IQueryable<Product> GetProducts([Service] ApplicationContext db) =>
            db.Products.AsNoTracking();

        [UsePaging]
        [UseSelection]
        [UseFiltering]
        [UseSorting]
        public IQueryable<Demand> GetDemands([Service] ApplicationContext db) =>
            db.Demands.AsNoTracking();
    }
}