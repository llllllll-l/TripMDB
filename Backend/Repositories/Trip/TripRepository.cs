using Backend.Models;
using Backend.Payloads;
using Backend.Data;
using Microsoft.EntityFrameworkCore;
using Backend.Endpoints;
using Backend.DTOs;

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

        public async Task<Trip> 
        DeleteUserTrip(string userId, int tripId)
        {
            Trip tripToDelete = await db.Trips.FirstOrDefaultAsync
            (t => t.UserId == userId && t.Id == tripId);
            if (tripToDelete == null)
            {
                throw new Exception("Trip not found");
            }

            db.Trips.Remove(tripToDelete);

            try{
                await db.SaveChangesAsync();
            } catch (DbUpdateException ex)
            {
                throw new Exception("Error deleting trip", ex);
            }       
            return tripToDelete;
        }

        public async Task<ICollection<Trip>> GetUserTrips(string user_id)
        {
            return await db.Trips
                            .Where(t => t.UserId == user_id)
                            .Include(t => t.User)
                            .Include(t => t.Movie)
                            .ThenInclude(m => m.MovieLocations)
                            .ThenInclude(ml => ml.Location)
                            .ToListAsync();
        }
    }
}
