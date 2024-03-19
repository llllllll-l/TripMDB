using Backend.DTOs;
using Backend.Models;
using Backend.Payloads;
using Backend.Repositories;

namespace Backend.Endpoints
{
    public static class TripsApi
    {

        public static void ConfigureTripsApi(this WebApplication app)
        {
            var authGroup = app.MapGroup("trips");
            authGroup.MapGet("/{userId}", GetUserTrip); 
            authGroup.MapPost("/", AddTrip); 
        }

        public static async Task<IResult> GetUserTrip(ITripRepository tripRepository, string userId)
        {
            ICollection<Trip> trips = await tripRepository.GetUserTrips(userId);
            return TypedResults.Ok(TripDTO.FromRepository(trips));
        }

        public static async Task<IResult> AddTrip(ITripRepository tripRepository, TripPostPayload payload)
        {
            return TypedResults.Created("created trip", await tripRepository.AddTrip(payload));
        }
    }
}
