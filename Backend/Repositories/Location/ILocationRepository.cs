using Backend.Models;
using Backend.Payloads;

namespace Backend.Repositories
{
    public interface ILocationRepository
    {
        public Task<Location?> AddLocation(LocationPostPayload LocationPostPayload);
        public Task<ICollection<Location>> GetLocations();
    }
}