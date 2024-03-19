using Backend.Models;
using Backend.Payloads;

namespace Backend.Repositories
{
    public interface ITripRepository
    {
        public Task<Trip?> AddTrip(TripPostPayload tripPostPayload);
        public Task<ICollection<Trip>> GetUserTrips(string user_id);
    }
}