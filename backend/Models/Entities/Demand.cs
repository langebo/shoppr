using System;
using System.ComponentModel.DataAnnotations;
using HotChocolate;
using HotChocolate.Types.Relay;
using ShoppR.Models.Abstractions;

namespace ShoppR.Models.Entities
{
    public class Demand : IEntity, INode
    {
        [Key]
        public Guid Id { get; set; }
        public DateTimeOffset CreatedAt { get; set; }

        [GraphQLIgnore]
        public Guid ProductId { get; set; }
        public Product Product { get; set; }

        [GraphQLIgnore]
        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}