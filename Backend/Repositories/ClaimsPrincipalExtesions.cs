using System.Security.Claims;

namespace Backend.Repositories
{
    public static class ClaimsPrincipalExtesions
    {
        /// <summary>
        /// Finds the id of a looged in user
        /// </summary>
        /// <param name="user"></param> the currently logged in user
        /// <returns></returns> the id as string, else null
        public static string? GetUserId(this ClaimsPrincipal user)
        {
            IEnumerable<Claim> claims = user.Claims.Where(c => c.Type == ClaimTypes.NameIdentifier);

            if (claims.Count() >= 2)
            {
                return claims.ElementAtOrDefault(1).Value;
            }
            return null;
        }

        /// <summary>
        /// Finds the currently logged in users UserName
        /// </summary>
        /// <param name="user"></param> the currently logged in user
        /// <returns></returns> the UserName if found, else null
        public static string? GetUserName(this ClaimsPrincipal user)
        {
            IEnumerable<Claim> claims = user.Claims.ToList();

            if (claims.Count() >= 4)
            {
                return claims.ElementAtOrDefault(4).Value;
            }

            return null;
        }
    }
}
