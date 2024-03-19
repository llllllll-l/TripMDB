using Backend.Models; 

namespace Backend.Payloads
{
    public record TripPostPayload (string UserId, int MovieId, DateTime Date, string Description);
    
}
