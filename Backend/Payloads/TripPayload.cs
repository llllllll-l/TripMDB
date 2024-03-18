using Backend.Models; 

namespace Backend.Payloads
{
    public record TripPostPayload (int UserId, int MovieId, DateTime Date, string Description);
    
}
