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
    public class DemandType : ObjectType<Demand>
    {
        protected override void Configure(IObjectTypeDescriptor<Demand> descriptor)
        {
            base.Configure(descriptor);
            descriptor.AsNode()
                      .IdField(d => d.Id)
                      .NodeResolver(ResolveDemand);
        }

        private async Task<Demand> ResolveDemand(IResolverContext context, Guid id)
        {
            var db = context.Service<ApplicationContext>();
            return await db.Demands.AsNoTracking()
                .FirstOrDefaultAsync(d => d.Id == id, context.RequestAborted);
        }
    }
}