using Backend.Enums;
using Backend.Models;
using Backend.Payloads;
using Backend.Services;
using Microsoft.AspNetCore.Identity;
using static Backend.Payloads.AuthPayload;

namespace Backend.Endpoints
{
    public static class MovieApi
    {

        public static void ConfigureMovieApi(this WebApplication app)
        {
            var authGroup = app.MapGroup("movies");
            authGroup.MapGet("/{movieId}", GetMovieById); 
            authGroup.MapPost("/", AddMovie); 
        }

        public static async Task<IResult> GetMovieById(string movieId)
        {
            return TypedResults.NotFound(movieId);
        }

        /*TODO: Make admin required */
        public static async Task<IResult> AddMovie(MoviePostPayload payload)
        {
            return TypedResults.BadRequest();
        }
    }
}
