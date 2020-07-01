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
    public class UserType : ObjectType<User>
    {
        protected override void Configure(IObjectTypeDescriptor<User> descriptor)
        {
            base.Configure(descriptor);
            descriptor.AsNode()
                      .IdField(u => u.Id)
                      .NodeResolver(ResolveUser);
        }

        private async Task<User> ResolveUser(IResolverContext context, Guid id)
        {
            var db = context.Service<ApplicationContext>();
            return await db.Users.AsNoTracking()
                .FirstOrDefaultAsync(u => u.Id == id, context.RequestAborted);
        }
    }
}