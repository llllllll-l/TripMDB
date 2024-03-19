using Backend.Enums;
using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class DBContext : IdentityUserContext<ApplicationUser>
    {

        private readonly string _dbConnectionString;

        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {
            var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
            _dbConnectionString = configuration.GetValue<string>("ConnectionStrings:DefaultConnectionString")!;
            this.Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            var passwordHasher = new PasswordHasher<ApplicationUser>();
            ApplicationUser admin = new ApplicationUser
            {
                UserName = "admin",
                NormalizedUserName = "ADMIN",
                Email = "admin@admin.com",
                NormalizedEmail = "ADMIN@ADMIN.COM",
                Role = UserRoles.Admin
            };
            admin.PasswordHash = passwordHasher.HashPassword(admin, "Admin123");
            builder.Entity<ApplicationUser>().HasData(admin);

            builder.Entity<MovieLocation>()
               .HasKey(ml => new { ml.MovieId, ml.LocationId });

            builder.Entity<Trip>()
              .HasOne(t => t.User)
              .WithMany()
              .HasForeignKey(t => t.UserId)
              .IsRequired();
        }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<Trip> Trips { get; set; }
        public DbSet<Location> Locations { get; set; }
    }
}
