// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityModel;
using IdentityServer4.Test;
using System.Collections.Generic;
using System.Security.Claims;

namespace IdentityServerHost.Quickstart.UI
{
    public class TestUsers
    {
        public static List<TestUser> Users
        {
            get
            {
                return new List<TestUser>
                {
                    new TestUser
                    {
                        SubjectId = "3971103123456",
                        Username = "3971103123456",
                        Password = "123",
                        Claims =
                        {
                            new Claim(JwtClaimTypes.Name, "Muhammad Azeez"),
                            new Claim(JwtClaimTypes.GivenName, "Muhammad"),
                            new Claim(JwtClaimTypes.FamilyName, "Azeez"),
                            new Claim(JwtClaimTypes.Email, "muhammad-azeez@outlook.com"),
                            new Claim(JwtClaimTypes.EmailVerified, "true", ClaimValueTypes.Boolean),
                        },
                    },
                    new TestUser
                    {
                        SubjectId = "4990102438634",
                        Username = "4990102438634",
                        Password = "123",
                        Claims =
                        {
                            new Claim(JwtClaimTypes.Name, "Vazhin Tayeb"),
                            new Claim(JwtClaimTypes.GivenName, "Vazhin"),
                            new Claim(JwtClaimTypes.FamilyName, "Tayeb"),
                            new Claim(JwtClaimTypes.Email, "vazhintayeb@gmail.com"),
                            new Claim(JwtClaimTypes.EmailVerified, "true", ClaimValueTypes.Boolean),
                        },
                    }
                };
            }
        }
    }
}