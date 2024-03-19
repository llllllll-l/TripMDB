using Backend.Models;
using Backend.Payloads;

namespace Backend.Repositories
{
    public interface IMovieLocationRepository
    {
        public Task<MovieLocation?> AddMovieLocation(MovieLocationPostPayload MovieLocationPostPayload);
        public Task<ICollection<MovieLocation>> GetMovieLocations();
    }
}