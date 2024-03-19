using System.ComponentModel.DataAnnotations.Schema;
using Backend.Models;
namespace Backend.DTOs
{
    public class MovieLocationDTO
    {
        public int MovieId { get; set; }
        public int LocationId { get; set; }
        public MovieDTO movie {get; set; }
        public LocationDTO location { get; set; }


        public MovieLocationDTO(MovieLocation movieLocation)
        {
            MovieId = movieLocation.MovieId;
            movie = new MovieDTO(movieLocation.Movie);
            LocationId = movieLocation.LocationId;
            location = new LocationDTO(movieLocation.Location);
        }

        public static List<MovieLocationDTO> FromRepository(IEnumerable<MovieLocation> movieLocation)
        {
            var results = new List<MovieLocationDTO>();
            foreach (var ml in movieLocation)
            {
                results.Add(new MovieLocationDTO(ml));
            }
            return results;
        }

        public static MovieLocationDTO FromRepository(MovieLocation movieLocation)
        {
            return new MovieLocationDTO(movieLocation);
        }

    }
}