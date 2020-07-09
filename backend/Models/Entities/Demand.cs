using System;
using System.ComponentModel.DataAnnotations;
using HotChocolate;
using HotChocolate.Types.Relay;

namespace ShoppR.Models.Entities
{
    public class Demand : INode
    {
        [Key]
        public Guid Id { get; set; }
        public DateTime CreatedAt { get; set; }

        [GraphQLIgnore]
        public Guid ProductId { get; set; }
        public Product Product { get; set; }

        [GraphQLIgnore]
        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}