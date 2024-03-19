using Backend.Enums;
using Backend.Models;
using Backend.Payloads;
using Backend.Repositories;
using Backend.Services;
using Microsoft.AspNetCore.Identity;
using static Backend.Payloads.AuthPayload;

namespace Backend.Endpoints
{
    public static class MovieLocationApi
    {

        public static void ConfigureMovieLocationApi(this WebApplication app)
        {
            var authGroup = app.MapGroup("movielocation");
            authGroup.MapPost("/", AddMovieLocation);
            authGroup.MapGet("/", GetMovieLocation);
        }
        public static async Task<IResult> GetMovieLocation(IMovieLocationRepository movieLocationRepository)
        {
            return TypedResults.Ok(await movieLocationRepository.GetMovieLocations());
        }
        /*TODO: Make admin required */
        public static async Task<IResult> AddMovieLocation(IMovieLocationRepository movieLocationRepository, MovieLocationPostPayload payload)
        {
            return TypedResults.Created("MovieLocation", await movieLocationRepository.AddMovieLocation(payload));
        }
    }
}
