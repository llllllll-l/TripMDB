using Backend.Models;

namespace Backend.DTOs
{
    public class MovieDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Release { get; set; }
        public string Genre { get; set; }
        public string Director { get; set; }
        public int Rating { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        public MovieDTO(Movie movie)
        {
            Id = movie.Id;
            Title = movie.Title;
            Release = movie.Release;
            Genre = movie.Genre;
            Director = movie.Director;
            Rating = movie.Rating;
            Description = movie.Description;
            Image = movie.Image;
        }
    }
}