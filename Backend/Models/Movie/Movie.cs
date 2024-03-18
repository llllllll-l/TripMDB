using Backend.Enums;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("movie")]
    public class Movie()
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("title")]
        public string Title { get; set; }
        [Column("release")]
        public int Release { get; set; }
        [Column("genre")]
        public string Genre { get; set; }
        [Column("director")]
        public string Director { get; set; }
        // Navigation property for the one-to-many relationship
        public List<Trip> Trips { get; set; }
        public ICollection<MovieLocation> MovieLocations { get; set; } // navigation record, handled by EF

    }
}