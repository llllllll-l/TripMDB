using Backend.DTOs;
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
            authGroup.MapGet("/{movideId}", GetMovieLocationByMovieId);
        }
        public static async Task<IResult> GetMovieLocationByMovieId(IMovieLocationRepository movieLocationRepository, int movieId)
        {
            ICollection<MovieLocation> ml = await movieLocationRepository.GetMovieLocationByMovieId(movieId);
            return TypedResults.Ok(TripMovieLocationDTO.FromRepository(ml));
        }
        public static async Task<IResult> GetMovieLocation(IMovieLocationRepository movieLocationRepository)
        {
            ICollection<MovieLocation> ml = await movieLocationRepository.GetMovieLocations();
            return TypedResults.Ok(MovieLocationDTO.FromRepository(ml));
        }
        /*TODO: Make admin required */
        public static async Task<IResult> AddMovieLocation(IMovieLocationRepository movieLocationRepository, MovieLocationPostPayload payload)
        {   
            MovieLocation? ml = await movieLocationRepository.AddMovieLocation(payload);

            return TypedResults.Created("MovieLocation", MovieLocationDTO.FromRepository(ml));
        }
    }
}
