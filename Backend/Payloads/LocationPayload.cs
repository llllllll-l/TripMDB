using Backend.Models; 

namespace Backend.Payloads
{
    public record LocationPostPayload (string LocationName, string City, string Country, float Latitude, float Longitude);
    
}
