using Backend.Enums;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Identity;
using static Backend.Payloads.AuthPayload;

namespace Backend.Endpoints
{
    public static class AuthApi
    {

        public static void ConfigureAuthApi(this WebApplication app)
        {
            var authGroup = app.MapGroup("authentication");
            authGroup.MapPost("/login", Login);
            authGroup.MapPost("/register", Register);
        }


        /// <summary>
        /// a user that is already in the system can be logged in by entering the right credentials
        /// </summary>
        /// <param name="userManager"></param> is the class from Identity that is used to access the users table that was generated
        /// <param name="tokenService"></param> is the TokenServer class that creates a JWT token easily
        /// <param name="payload"></param> id the data the user needs to provide
        /// <returns></returns> 200 if the payload is ok and the user is in the database, 400 if the payload is bad or missing
        public static async Task<IResult> Login(UserManager<ApplicationUser> userManager, TokenService tokenService, LoginPayload payload)
        {
            if (payload.Email == null || payload.Email.Length == 0) return TypedResults.BadRequest("an email is required!");
            if (payload.Password == null || payload.Password.Length == 0) return TypedResults.BadRequest("A password is required!");

            // find by email
            var user = await userManager.FindByEmailAsync(payload.Email);
            if (user == null) return TypedResults.BadRequest("Invalid Email and/or password");

            var isPassword = await userManager.CheckPasswordAsync(user, payload.Password);
            if (!isPassword) return TypedResults.BadRequest("Invalid Email and/or password");

            var token = tokenService.CreateToken(user);

            return TypedResults.Ok(new LoginResPayload(token, user.UserName, user.Email));
        }

        /// <summary>
        /// a user is not in the system and need to register
        /// </summary>
        /// <param name="userManager"></param> is the class from Identity that is used to access the users table that was generated
        /// <param name="payload"></param> is the data the user needs to provide
        /// <returns></returns> 201 created if successfull, 400 if the payload is bad or missing
        public static async Task<IResult> Register(UserManager<ApplicationUser> userManager, RegisterPayload payload)
        {
            if (payload.Email == null) return TypedResults.BadRequest("Email is required!");
            if (payload.Password == null || payload.Password == "") return TypedResults.BadRequest("Password is required!");
            var result = await userManager.CreateAsync(
                new ApplicationUser
                {
                    UserName = payload.Username,
                    Email = payload.Email,

                    Role = UserRoles.User
                },
                payload.Password!
            );

            if (result.Succeeded)
            {
                return TypedResults.Created($"/authentication/register", new RegisterResPayload(payload.Username, payload.Email));
            }
            else
            {
                foreach (var error in result.Errors)
                {
                    // Log or display each error message
                    Console.WriteLine($"Error: {error.Description}");
                }
                return TypedResults.BadRequest(result.Errors.ToString());
            }
            
               
            
        }
    }
}
