using Backend.Models;
using Backend.Payloads;
using Backend.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories
{
    public class LocationRepository : ILocationRepository
    {
        private DBContext db;
        
        public LocationRepository(DBContext _databaseContext)
        {
            db = _databaseContext;
        }

        public async Task<Location?> AddLocation(LocationPostPayload LocationPostPayload)
        {
              Location location = new Location
            {
                LocationName = LocationPostPayload.LocationName,
                City = LocationPostPayload.City,
                Country = LocationPostPayload.Country,
                Latitude = LocationPostPayload.Latitude,
                Longitude = LocationPostPayload.Longitude
            };
            db.Locations.Add(location);
            await db.SaveChangesAsync();
            return location;
        }

        public async Task<ICollection<Location>> GetLocations()
        {
            return await db.Locations.ToListAsync();
        }
    }
}
