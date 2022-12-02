﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Practica3_PlaylistAPI.DbContexts;

#nullable disable

namespace Practica3_PlaylistAPI.Migrations
{
    [DbContext(typeof(CantanteInfoContext))]
    partial class CantanteInfoContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.10");

            modelBuilder.Entity("Practica3_PlaylistAPI.Entities.Cancion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CantanteId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Estreno")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CantanteId");

                    b.ToTable("Canciones");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CantanteId = 1,
                            Estreno = 2007,
                            Name = "Umbrella"
                        },
                        new
                        {
                            Id = 2,
                            CantanteId = 1,
                            Estreno = 2012,
                            Name = "Diamonds"
                        },
                        new
                        {
                            Id = 3,
                            CantanteId = 2,
                            Estreno = 2008,
                            Name = "Single Ladies"
                        },
                        new
                        {
                            Id = 4,
                            CantanteId = 2,
                            Estreno = 2011,
                            Name = "Run the World"
                        },
                        new
                        {
                            Id = 5,
                            CantanteId = 3,
                            Estreno = 2017,
                            Name = "Girls Like You"
                        },
                        new
                        {
                            Id = 6,
                            CantanteId = 3,
                            Estreno = 2015,
                            Name = "Animals"
                        });
                });

            modelBuilder.Entity("Practica3_PlaylistAPI.Entities.Cantante", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(30)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Cantantes");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Rihanna"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Beyonce"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Maroon 5"
                        });
                });

            modelBuilder.Entity("Practica3_PlaylistAPI.Entities.Cancion", b =>
                {
                    b.HasOne("Practica3_PlaylistAPI.Entities.Cantante", "Cantante")
                        .WithMany("Canciones")
                        .HasForeignKey("CantanteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cantante");
                });

            modelBuilder.Entity("Practica3_PlaylistAPI.Entities.Cantante", b =>
                {
                    b.Navigation("Canciones");
                });
#pragma warning restore 612, 618
        }
    }
}
