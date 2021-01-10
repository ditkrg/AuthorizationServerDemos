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

        public async Task OnGet()
        {
            var client = _httpClientFactory.CreateClient("APIClient");
            var response = await client.GetAsync($"/api/vehicles");

            if (response.IsSuccessStatusCode)
            {
                using (var responseStream = await response.Content.ReadAsStreamAsync())
                {
                    Vehicles = await JsonSerializer.DeserializeAsync<List<Vehicle>>(responseStream, new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });

                    TotalTax = Vehicles.Sum(v => 20_000);
                    FirstName = User.Claims.First(c => c.Type == "given_name").Value;
                    LastName = User.Claims.First(c => c.Type == "family_name").Value;
                }
            }
            else
            {
                throw new System.Exception("Problem accessing the API");
            }
        }
    }
}
