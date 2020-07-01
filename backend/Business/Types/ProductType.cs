using System;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Resolvers;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;
using ShoppR.Data;
using ShoppR.Models.Entities;

namespace ShoppR.Business.Types
{
    public class ProductType : ObjectType<Product>
    {
        protected override void Configure(IObjectTypeDescriptor<Product> descriptor)
        {
            base.Configure(descriptor);
            descriptor.AsNode()
                      .IdField(p => p.Id)
                      .NodeResolver(ResolveProduct);
        }

        private async Task<Product> ResolveProduct(IResolverContext context, Guid id)
        {
            var db = context.Service<ApplicationContext>();
            return await db.Products.AsNoTracking()
                .FirstOrDefaultAsync(p => p.Id == id, context.RequestAborted);
        }
    }
}