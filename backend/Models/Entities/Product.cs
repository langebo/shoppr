using System;
using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace ShoppR.Models.Entities
{
    public class Product : INode
    {
        [Key]
        public Guid Id { get; set; }
        public string Title { get; set; }
    }
}