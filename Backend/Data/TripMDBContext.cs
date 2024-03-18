using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Data
{
    public class TripMDBContext : DbContext
    {
        public TripMDBContext(DbContextOptions<TripMDBContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<MovieLocation>()
                .HasKey(ml => new { ml.MovieId, ml.LocationId });
        }

        public DbSet<Movie> Movies {get; set;}
        public DbSet<Trip> Trips {get; set;}
        public DbSet<User> Users {get; set;}
        public DbSet<Location> Locations {get; set;}
    }
}