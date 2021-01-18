using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OidcSamples.TrafficPoliceApi.Data;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace OidcSamples.TrafficPoliceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : Controller
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public VehiclesController(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        [HttpGet("")]
        public async Task<IEnumerable<Vehicle>> Get()
        {
            var ownerId = UserId();
            return await _applicationDbContext.Vehicles.Where(v => v.OwnerId == ownerId).ToListAsync();
        }

        private string UserId()
        {
            return User.Claims.First(c => c.Type == "sub").Value;
        }

        [HttpPost]
        public async Task<Vehicle> Post(VehicleRequest request)
        {
            var vehicle = new Vehicle
            {
                Model = request.Model,
                Color = request.Color,
                LicensePlate = request.LicensePlate,
                OwnerId = UserId(),
                Type = (VehicleType)request.Type,
            };

            _applicationDbContext.Vehicles.Add(vehicle);
            await _applicationDbContext.SaveChangesAsync();

            return vehicle;
        }
    }

    public class VehicleRequest
    {
        [StringLength(100)]
        public string OwnerId { get; set; }
        [StringLength(100)]
        public string Model { get; set; }
        [StringLength(32)]
        public string Color { get; set; }
        [StringLength(32)]
        public string LicensePlate { get; set; }
        [JsonNumberHandling(JsonNumberHandling.AllowReadingFromString)]
        public int Type { get; set; }
    }
}
