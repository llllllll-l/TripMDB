using Backend.Enums;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("movie_location")]
    public class MovieLocation
    {
        [Column("movie_id")]
        public int MovieId { get; set; }
        public Movie Movie { get; set; }
        [Column("location_id")]
        public int LocationId { get; set; }
        public Location Location { get; set; }
    }
}