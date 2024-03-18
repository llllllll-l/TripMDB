namespace Backend.Payloads
{
    public class AuthPayload
    {
        public record LoginPayload(string Email, string Password);
        public record LoginResPayload(string Token, string Username, string Email);
    }
}
