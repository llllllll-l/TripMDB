using Backend.DTOs;
using Backend.Models;
using Backend.Payloads;
using Backend.Repositories;

namespace Backend.Endpoints
{
    public static class LocationApi
    {

        public static void ConfigureLocationApi(this WebApplication app)
        {
            var authGroup = app.MapGroup("location"); 
            authGroup.MapPost("/", AddLocation); 
            authGroup.MapGet("/", GetLocations); 
        }

        /*TODO: Make admin required */
         public static async Task<IResult> GetLocations(ILocationRepository locationRepository)
        {
              
            ICollection<Location>? locations = await locationRepository.GetLocations();

            return TypedResults.Ok(LocationDTO.FromRepository(locations));
        }
        public static async Task<IResult> AddLocation(ILocationRepository locationRepository, LocationPostPayload payload)
        {
              
            Location? location = await locationRepository.AddLocation(payload);

            return TypedResults.Created("created", new LocationDTO(location));
        }
    }
}
