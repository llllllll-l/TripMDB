using Backend.Enums;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("user")]
    public class User()
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("username")]
        public string Username { get; set; }
        [Column("password")]
        public string Password { get; set; }
        [Column("email")]
        public string Email { get; set; }
        // Navigation property for the one-to-many relationship
        public List<Trip> Trips { get; set; }
        [Column("Role")]
        public UserRoles Role { get; set; }

    }
}