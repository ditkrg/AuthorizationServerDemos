// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Stores;
using System.Collections.Generic;

namespace OidcSamples.AuthorizationServer
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> IdentityResources =>
            new IdentityResource[]
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email(),
                new IdentityResources.Address(),
            };

        private const string TrafficPoliceApi = "traffic-police-api";

        public static IEnumerable<ApiScope> ApiScopes =>
            new ApiScope[]
            {
                new ApiScope(
                    TrafficPoliceApi,
                    "Traffic Police API scope"),
            };

        public static IEnumerable<ApiResource> ApiResources =>
            new ApiResource[] {
                new ApiResource(TrafficPoliceApi, "Traffic Police API")
                {
                     // This will make sure that `traffic-police-api` will be in the 
                     // list of audiences when this scope is requested
                    Scopes = new List<string>{ TrafficPoliceApi },
                },
            };

        public static IEnumerable<Client> Clients =>
            new Client[]
            {
                new Client
                {
                    // IdentityTokenLifetime = 
                    // AuthorizationCodeLifetime = 
                    AccessTokenLifetime = 60 * 60 * 8,
                    AllowOfflineAccess = true,
                    UpdateAccessTokenClaimsOnRefresh = true,
                    ClientName = "Traffic Police React App",
                    ClientId = "traffic-police-react-app",
                    AllowedGrantTypes = GrantTypes.Code,
                    RedirectUris =
                    {
                        "https://localhost:3000/signin-oidc"
                    },
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Email,
                        IdentityServerConstants.StandardScopes.Address,
                        "traffic-police-api",
                    },
                    RequirePkce = true,
                    PostLogoutRedirectUris =
                    {
                       "https://localhost:3000/signout-callback-oidc"
                    },

                    RequireConsent = false,
                },
                new Client
                {
                    AccessTokenLifetime = 60 * 60 * 8,
                    AllowOfflineAccess = true,
                    UpdateAccessTokenClaimsOnRefresh = true,
                    ClientName = "Tax ASP.NET Core Server Side App",
                    ClientId = "tax-asp-net-core-app",
                    AllowedGrantTypes = GrantTypes.Code,
                    RedirectUris =
                    {
                        "https://localhost:7001/signin-oidc"
                    },
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Address,
                        IdentityServerConstants.StandardScopes.Email,
                        "traffic-police-api",
                    },
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    RequirePkce = true,
                    PostLogoutRedirectUris =
                    {
                       "https://localhost:7001/signout-callback-oidc"
                    },

                    RequireConsent = false,
                }
            };
    }
}