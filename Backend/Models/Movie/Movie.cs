using Backend.Enums;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace Backend.Models
{
    [Table("movies")]
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
        [Column("rating")]
        public int Rating { get; set; }
        [Column("description")]
        public string Description { get; set; }
        [Column("image")]
        public string Image { get; set; }
        // Navigation property for the one-to-many relationship
        public List<Trip> Trips { get; set; }
        public ICollection<MovieLocation> MovieLocations { get; set; } // navigation record, handled by EF
    }
}