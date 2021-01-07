using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace OidcSamples.TrafficPoliceApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Vehicle> Vehicles { get; set; }
    }

    public enum VehicleType
    {
        Sedan = 0,
        SUV = 1,
        Pickup = 2
    }

    public class Vehicle
    {
        public long Id { get; set; }
        [StringLength(100)]
        public string OwnerId { get; set; }
        [StringLength(100)]
        public string Model { get; set; }
        [StringLength(32)]
        public string Color { get; set; }
        [StringLength(32)]
        public string LicensePlate { get; set; }
        public VehicleType Type { get; set; }
    }
}
