using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace OidcSamples.TaxApp.Controllers
{
    [Route("[controller]")]
    public class AuthenticationController : Controller
    {
        [HttpGet("Logout")]
        public async Task Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            await HttpContext.SignOutAsync(OpenIdConnectDefaults.AuthenticationScheme);
        }

        // https://andersonnjen.com/2019/03/22/identityserver4-global-logout/
        // https://docs.identityserver.io/en/release/topics/signout.html#notifying-clients-that-the-user-has-signed-out
        [HttpGet("FrontChannelLogout")]
        public async Task<IActionResult> FrontChannelLogout(string sid)
        {
            if (User.Identity.IsAuthenticated)
            {
                var currentSid = User.FindFirst("sid")?.Value ?? "";
                if (string.Equals(currentSid, sid, StringComparison.Ordinal))
                {
                    await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
                }
            }

            return NoContent();
        }
    }
}
