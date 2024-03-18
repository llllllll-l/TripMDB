using Backend.Enums;
using Backend.Models;
using Backend.Payloads;
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
        }

        /*TODO: Make admin required */
        public static async Task<IResult> AddMovieLocation(MovieLocationPostPayload payload)
        {
            return TypedResults.BadRequest();
        }
    }
}
