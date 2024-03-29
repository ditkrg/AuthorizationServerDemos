﻿// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServerHost.Quickstart.UI;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Net;
using Westwind.AspNetCore.LiveReload;

namespace OidcSamples.AuthorizationServer
{
    public class Startup
    {
        public IWebHostEnvironment Environment { get; }

        public Startup(IWebHostEnvironment environment)
        {
            Environment = environment;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews().AddRazorRuntimeCompilation();
            services.AddLiveReload(config =>
            {
                // optional - use config instead
                //config.LiveReloadEnabled = true;
                //config.FolderToMonitor = Path.GetFullname(Path.Combine(Env.ContentRootPath,"..")) ;
            });

            // Dirty Hack: Disable verifying SSL certificates 😬
            ServicePointManager.ServerCertificateValidationCallback +=
                (sender, cert, chain, sslPolicyErrors) => true;

            services.AddCors(options =>
            {
                options.AddPolicy(name: "Default",
                        builder =>
                        {
                            builder.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
                        });
            });

            var builder = services.AddIdentityServer(options =>
            {
                // see https://identityserver4.readthedocs.io/en/latest/topics/resources.html
                options.EmitStaticAudienceClaim = true;
            })
            .AddInMemoryIdentityResources(Config.IdentityResources)
            .AddInMemoryApiResources(Config.ApiResources)
            .AddInMemoryApiScopes(Config.ApiScopes)
            .AddInMemoryClients(Config.Clients)
            .AddTestUsers(TestUsers.Users);

            // not recommended for production - you need to store your key material somewhere secure
            builder.AddDeveloperSigningCredential();
        }

        public void Configure(IApplicationBuilder app)
        {
            // IMPORTANT: Before **any other output generating middleware** handlers including error handlers
            app.UseLiveReload();

            if (Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCookiePolicy(new CookiePolicyOptions
            {
                MinimumSameSitePolicy = SameSiteMode.Lax
            });

            app.Use(async (ctx, next) =>
            {
                ctx.Response.Headers.Add("Content-Security-Policy", new Microsoft.Extensions.Primitives.StringValues("default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' 'unsafe-inline' http://* 'unsafe-inline' 'unsafe-eval'"));
                await next();
            });

            app.UseStaticFiles();
            app.UseRouting();

            app.UseCors("Default");

            app.UseIdentityServer();

            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
            });
        }
    }
}
