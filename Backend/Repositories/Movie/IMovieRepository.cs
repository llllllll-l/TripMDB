using Backend.Models;
using Backend.Payloads;

namespace Backend.Repositories
{
    public interface IMovieRepository
    {
        public Task<Movie?> GetMovieById(int movieId);
        public Task<Movie?> AddMovie(MoviePostPayload MoviePostPayload);
        public Task<IEnumerable<Movie>> getAllMovies();
        public Task<Movie?> deleteMovie(int id);

    }
}