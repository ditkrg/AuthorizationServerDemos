﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using OidcSamples.TrafficPoliceApi.Data;

namespace OidcSamples.TrafficPoliceApi.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20210107062802_Vehicle")]
    partial class Vehicle
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityByDefaultColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("OidcSamples.TrafficPoliceApi.Data.Vehicle", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasColumnName("id")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Color")
                        .HasMaxLength(32)
                        .HasColumnType("character varying(32)")
                        .HasColumnName("color");

                    b.Property<string>("LicensePlate")
                        .HasMaxLength(32)
                        .HasColumnType("character varying(32)")
                        .HasColumnName("license_plate");

                    b.Property<string>("Model")
                        .HasMaxLength(100)
                        .HasColumnType("character varying(100)")
                        .HasColumnName("model");

                    b.Property<string>("OwnerId")
                        .HasMaxLength(100)
                        .HasColumnType("character varying(100)")
                        .HasColumnName("owner_id");

                    b.Property<int>("Type")
                        .HasColumnType("integer")
                        .HasColumnName("type");

                    b.HasKey("Id")
                        .HasName("pk_vehicles");

                    b.ToTable("vehicles");
                });
#pragma warning restore 612, 618
        }
    }
}
