using Backend.Models;
using Backend.Payloads;
using Backend.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories
{
    public class TripRepository : ITripRepository
    {
        private DBContext db;
        
        public TripRepository(DBContext _databaseContext)
        {
            db = _databaseContext;
        }

        public async Task<Trip?> AddTrip(TripPostPayload tripPostPayload)
        {
              Trip trip = new Trip
            {
                UserId = tripPostPayload.UserId,
                MovieId = tripPostPayload.MovieId,
                Date = tripPostPayload.Date,
                Description = tripPostPayload.Description

            };
            db.Trips.Add(trip);
            await db.SaveChangesAsync();
            return trip;
        }

        public async Task<ICollection<Trip>> GetUserTrips(string user_id)
        {
            return await db.Trips
                            .Where(t => t.UserId == user_id)
                            .ToListAsync();
        }
    }
}
