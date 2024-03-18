using Backend.Enums;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("location")]
    public class Location()
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("location_name")]
        public string LocationName { get; set; }
        [Column("city")]
        public string City { get; set; }
        [Column("country")]
        public string Country { get; set; }
        [Column("latitude")]
        public float Latitude { get; set; }
        [Column("longitude")]
        public float Longitude { get; set; }

        public ICollection<MovieLocation> MovieLocations { get; set; } // navigation record, handled by EF

    }
}