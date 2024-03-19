using Backend.Models;

namespace Backend.DTOs
{
    public class UserDTO
    {
        public string Id { get; set; }
        public string Username { get; set; }

        public UserDTO(ApplicationUser user)
        {
            Id = user.Id;
            Username = user.UserName;
        }
    }
}