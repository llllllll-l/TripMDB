using System.ComponentModel.DataAnnotations.Schema;
using Backend.Models;
namespace Backend.DTOs
{
    public class MovieResponseLocationDTO
    {
        public LocationDTO location { get; set; }


        public MovieResponseLocationDTO(MovieLocation movieLocation)
        {
            location = new LocationDTO(movieLocation.Location);
        }

        public static List<MovieResponseLocationDTO> FromRepository(IEnumerable<MovieLocation> movieLocation)
        {
            var results = new List<MovieResponseLocationDTO>();
            foreach (var ml in movieLocation)
            {
                results.Add(new MovieResponseLocationDTO(ml));
            }
            return results;
        }

        public static MovieResponseLocationDTO FromRepository(MovieLocation movieLocation)
        {
            return new MovieResponseLocationDTO(movieLocation);
        }

    }
}