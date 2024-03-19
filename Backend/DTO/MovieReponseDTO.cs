using Backend.Models;

namespace Backend.DTOs
{
    public class MovieResponseDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Release { get; set; }
        public string Genre { get; set; }
        public string Director { get; set; }
        public int Rating { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public ICollection<MovieResponseLocationDTO> locations {get; set;}
        public MovieResponseDTO(Movie movie)
        {
            Id = movie.Id;
            Title = movie.Title;
            Release = movie.Release;
            Genre = movie.Genre;
            Director = movie.Director;
            Rating = movie.Rating;
            Description = movie.Description;
            Image = movie.Image;
            locations = MovieResponseLocationDTO.FromRepository(movie.MovieLocations);
        }
        public static List<MovieResponseDTO> FromRepository(IEnumerable<Movie> movies)
        {
            var results = new List<MovieResponseDTO>();
            foreach (var ml in movies)
            {
                results.Add(new MovieResponseDTO(ml));
            }
            return results;
        }
        public static MovieResponseDTO FromRepository(Movie Movie)
        {
            return new MovieResponseDTO(Movie);
        }
    }
}