using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Identity;
using System.Runtime.CompilerServices;
using static Backend.Payloads.AuthPayload;

namespace Backend.Endpoints
{
    public static class AuthApi
    {

        public static void ConfigureAuthApi(this WebApplication app)
        {
            var authGroup = app.MapGroup("authentication");
            authGroup.MapPost("/login", Login);
        }



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

            return TypedResults.Ok(new LoginResPayload(token, user.Email, user.UserName));
                
            
        }
    }
}
