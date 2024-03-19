using Backend.Models;
using Backend.Payloads;
using Backend.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories
{
    public class MovieLocationRepository : IMovieLocationRepository
    {
        private DBContext db;
        
        public MovieLocationRepository(DBContext _databaseContext)
        {
            db = _databaseContext;
        }

        public async Task<MovieLocation?> AddMovieLocation(MovieLocationPostPayload MovieLocationPostPayload)
        {
              MovieLocation Movielocation = new MovieLocation
            {
                MovieId = MovieLocationPostPayload.MovieId,
                LocationId = MovieLocationPostPayload.LocationId
            };
            db.MovieLocations.Add(Movielocation);
            await db.SaveChangesAsync();
            return Movielocation;
        }

        public async Task<ICollection<MovieLocation>> GetMovieLocations()
        {
            return await db.MovieLocations.ToListAsync();
        }
    }
}
