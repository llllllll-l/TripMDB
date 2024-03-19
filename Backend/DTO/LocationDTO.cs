using Backend.Models;

namespace Backend.DTOs
{
    public class LocationDTO
    {
        public int Id { get; set; }
        public string LocationName { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }

        public LocationDTO(Location Location)
        {
            Id = Location.Id;
            LocationName = Location.LocationName;
            Country = Location.Country;
            City = Location.City;
            Latitude = Location.Latitude;
            Longitude = Location.Longitude;
        }

        
        public static List<LocationDTO> FromRepository(IEnumerable<Location> Locations)
        {
            var results = new List<LocationDTO>();
            foreach (var location in Locations)
            {
                results.Add(new LocationDTO(location));
            }
            return results;
        }
    }
}