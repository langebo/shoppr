using System;
using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace ShoppR.Models.Entities
{
    public class User : INode
    {
        [Key]
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
    }
}