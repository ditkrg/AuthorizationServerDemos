using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace OidcSamples.TaxApp.Pages
{
    public enum VehicleType
    {
        Sedan = 0,
        SUV = 1,
        Pickup = 2
    }

    public class Vehicle
    {
        public long Id { get; set; }
        public string OwnerId { get; set; }
        public string Model { get; set; }
        public string Color { get; set; }
        public string LicensePlate { get; set; }
        public VehicleType Type { get; set; }
    }

    public class RealEstate
    {
        public int Id { get; set; }
        public double Area { get; set; }
        public string Address { get; set; }
        public string Citizen_upn { get; set; }
    }

    [Authorize] //(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly IHttpClientFactory _httpClientFactory;

        public IndexModel(ILogger<IndexModel> logger, IHttpClientFactory httpClientFactory)
        {
            _logger = logger;
            _httpClientFactory = httpClientFactory;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public decimal TotalTax { get; set; }

        public List<Vehicle> Vehicles { get; set; }
        public List<RealEstate> RealEstate { get; set; }

        public async Task OnGet()
        {
            var tpClient = _httpClientFactory.CreateClient("TP-APIClient");
            var tpResponse = await tpClient.GetAsync($"/api/vehicles");

            Vehicles = await GetVehicles();
            RealEstate = await GetRealEstate();

            TotalTax = Vehicles.Sum(v => 20_000) + RealEstate.Sum(r => 100_000);

            FirstName = User.Claims.First(c => c.Type == "given_name").Value;
            LastName = User.Claims.First(c => c.Type == "family_name").Value;
        }

        private async Task<List<Vehicle>> GetVehicles()
        {
            var tpClient = _httpClientFactory.CreateClient("TP-APIClient");
            var tpResponse = await tpClient.GetAsync($"/api/vehicles");

            if (tpResponse.IsSuccessStatusCode)
            {
                using (var responseStream = await tpResponse.Content.ReadAsStreamAsync())
                {
                    return await JsonSerializer.DeserializeAsync<List<Vehicle>>(responseStream, new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
                }
            }
            else
            {
                throw new System.Exception("Problem accessing Traffic Police the API");
            }
        }

        private async Task<List<RealEstate>> GetRealEstate()
        {
            var tpClient = _httpClientFactory.CreateClient("RE-APIClient");
            var tpResponse = await tpClient.GetAsync($"/real-estate");

            if (tpResponse.IsSuccessStatusCode)
            {
                using (var responseStream = await tpResponse.Content.ReadAsStreamAsync())
                {
                    return await JsonSerializer.DeserializeAsync<List<RealEstate>>(responseStream, new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
                }
            }
            else
            {
                throw new System.Exception("Problem accessing the Real Estate API");
            }
        }
    }
}
