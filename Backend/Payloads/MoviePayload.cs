using Backend.Models; 

namespace Backend.Payloads
{
    public record MoviePostPayload (string Title, int ReleaseYear, string Genre, string Director);
    
}
