using Backend.Enums;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("trip")]
    public class Trip
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("user_id")]
        public int UserId { get; set; }
        public User User { get; set; }
        [Column("movie_id")]
        public int MovieId { get; set; }
        public Movie Movie { get; set; }
        [Column("date")]
        public DateTime Date { get; set; }
        [Column("description")]
        public string Description { get; set; }
    }
}