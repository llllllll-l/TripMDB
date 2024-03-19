using System.ComponentModel.DataAnnotations.Schema;
using Backend.Models;
namespace Backend.DTOs
{
    public class TripDTO
    {
        public int Id { get; set; }
        public UserDTO User { get; set; }
        public MovieDTO Movie {get; set;}
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public ICollection<TripMovieLocationDTO> locations { get; set; }

        public TripDTO(Trip trip)
        {
            User = new UserDTO(trip.User);
            Id = trip.Id;
            Movie = new MovieDTO(trip.Movie);
            Date = trip.Date;
            Description = trip.Description;
            locations = TripMovieLocationDTO.FromRepository(trip.Movie.MovieLocations);

        }

        public static List<TripDTO> FromRepository(IEnumerable<Trip> Trip)
        {
            var results = new List<TripDTO>();
            foreach (var ml in Trip)
            {
                results.Add(new TripDTO(ml));
            }
            return results;
        }

        public static TripDTO FromRepository(Trip Trip)
        {
            return new TripDTO(Trip);
        }

    }
}