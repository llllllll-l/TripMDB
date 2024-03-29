using Backend.Models;
using Backend.Payloads;
using Backend.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories
{
    public class MovieRepository : IMovieRepository
    {
        private DBContext db;
        
        public MovieRepository(DBContext _databaseContext)
        {
            db = _databaseContext;
        }
        
        public async Task<Movie?> GetMovieById(int movieId)
        {
             Movie? movie = await db.Movies
                .Where(m => m.Id == movieId)
                .Include(m => m.MovieLocations)
                .ThenInclude(ml => ml.Location)
                .SingleOrDefaultAsync();
            if (movie == null)
            {
                return null;
            }
            return movie;
        }

        public async Task<Movie?> AddMovie(MoviePostPayload moviePostPayload)
        {
            Movie movie = new Movie
            {
                Title = moviePostPayload.Title,
                Release = moviePostPayload.ReleaseYear,
                Genre = moviePostPayload.Genre,
                Director = moviePostPayload.Director,
                Rating = moviePostPayload.Rating,
                Description = moviePostPayload.Description,
                Image = moviePostPayload.Image
            };
            db.Movies.Add(movie);
            await db.SaveChangesAsync();
            return movie;
        }

        public async Task<IEnumerable<Movie>> getAllMovies() {
            return await db.Movies
                        .Include(m => m.MovieLocations)
                        .ThenInclude(ml => ml.Location)
                        .ToListAsync();
        }

        public async Task<Movie?> deleteMovie(int id) {
            var result = await db.Movies.FindAsync(id);
            if (result == null) {
                return null;
            }
            db.Movies.Remove(result);
            await db.SaveChangesAsync();
            return result;
        }
    }
}
