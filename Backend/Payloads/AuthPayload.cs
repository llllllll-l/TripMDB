namespace Backend.Payloads
{
    public class AuthPayload
    {
        public record LoginPayload(string Email, string Password);
        public record LoginResPayload(string Token, string Username, string Email, string Id, Enums.UserRoles Role);

        public record RegisterPayload(string Username, string Email, string Password);
        public record RegisterResPayload(string Username, string Email);
    }
}
