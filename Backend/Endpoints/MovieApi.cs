using Backend.Models;
using Backend.Payloads;
using Backend.Repositories;
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

        public static async Task<IResult> GetMovieById(IMovieRepository movieRepository, int movieId)
        {
            return TypedResults.Ok(await movieRepository.GetMovieById(movieId));
        }

        /*TODO: Make admin required */
        public static async Task<IResult> AddMovie(IMovieRepository movieRepository, MoviePostPayload payload)
        {
            
            Movie? movie = await movieRepository.AddMovie(payload);

            return TypedResults.Created("created", movie);
        }
    }
}
