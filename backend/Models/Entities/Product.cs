using System;
using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using ShoppR.Models.Abstractions;

namespace ShoppR.Models.Entities
{
    public class Product : IEntity, INode
    {
        [Key]
        public Guid Id { get; set; }
        public string Title { get; set; }
    }
}