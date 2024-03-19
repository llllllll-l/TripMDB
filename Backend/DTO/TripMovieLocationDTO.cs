using System.ComponentModel.DataAnnotations.Schema;
using Backend.Models;
namespace Backend.DTOs
{
    public class TripMovieLocationDTO
    {
        public int MovieId { get; set; }
        public LocationDTO location { get; set; }


        public TripMovieLocationDTO(MovieLocation movieLocation)
        {
            MovieId = movieLocation.MovieId;
            location = new LocationDTO(movieLocation.Location);
        }

        public static List<TripMovieLocationDTO> FromRepository(IEnumerable<MovieLocation> movieLocation)
        {
            var results = new List<TripMovieLocationDTO>();
            foreach (var ml in movieLocation)
            {
                results.Add(new TripMovieLocationDTO(ml));
            }
            return results;
        }

        public static TripMovieLocationDTO FromRepository(MovieLocation movieLocation)
        {
            return new TripMovieLocationDTO(movieLocation);
        }

    }
}