using System;

namespace ShoppR.Models.Abstractions
{
    public interface IEntity
    {
        Guid Id { get; set; }
    }
}