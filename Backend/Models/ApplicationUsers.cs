using Backend.Enums;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("users")]
    public class ApplicationUser : IdentityUser
    {
        [Column("Role")]
        public UserRoles Role { get; set; }  
        // Navigation property for the one-to-many relationship
        public List<Trip>? Trips { get; set; }
    }
}
