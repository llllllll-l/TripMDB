using Backend.Enums;
using Backend.Models;
using Backend.Payloads;
using Backend.Repositories;
using Backend.Services;
using Microsoft.AspNetCore.Identity;
using static Backend.Payloads.AuthPayload;

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
            return TypedResults.Ok(await tripRepository.GetUserTrips(userId));
        }

        public static async Task<IResult> AddTrip(ITripRepository tripRepository, TripPostPayload payload)
        {
            return TypedResults.Created("created trip", await tripRepository.AddTrip(payload));
        }
    }
}
