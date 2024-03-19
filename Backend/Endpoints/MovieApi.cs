using Backend.DTOs;
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
            authGroup.MapGet("/", getAllMovies);
        }

        public static async Task<IResult> GetMovieById(IMovieRepository movieRepository, int movieId)
        {
            Movie? movie = await movieRepository.GetMovieById(movieId);
            return TypedResults.Ok(MovieResponseDTO.FromRepository(movie));
        }

        /*TODO: Make admin required */
        public static async Task<IResult> AddMovie(IMovieRepository movieRepository, MoviePostPayload payload)
        {
            
            Movie? movie = await movieRepository.AddMovie(payload);

            return TypedResults.Created("created", movie);
        }


        public static async Task<IResult> getAllMovies(IMovieRepository movieRepository) {
            IEnumerable<Movie> result = await movieRepository.getAllMovies();
            if (result == null) {
                return TypedResults.NotFound("There are no movies in the database");
            }
            return TypedResults.Ok(MovieResponseDTO.FromRepository(result));
            //throw new NotImplementedException();
        }
    }
}
