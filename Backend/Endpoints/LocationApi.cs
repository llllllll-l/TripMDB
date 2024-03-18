using Backend.Payloads;

namespace Backend.Endpoints
{
    public static class LocationApi
    {

        public static void ConfigureLocationApi(this WebApplication app)
        {
            var authGroup = app.MapGroup("location"); 
            authGroup.MapPost("/", AddLocation); 
        }

        /*TODO: Make admin required */
        public static async Task<IResult> AddLocation(LocationPostPayload payload)
        {
            return TypedResults.BadRequest();
        }
    }
}
