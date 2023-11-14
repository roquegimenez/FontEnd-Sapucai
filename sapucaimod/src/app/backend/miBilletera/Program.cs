using Microsoft.EntityFrameworkCore;
using miBilletera.Data;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models; // Agregar esta línea

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(builder=>
{
  builder.AllowAnyOrigin()
  .AllowAnyMethod()
  .AllowAnyHeader();

});

});


// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<MiDbContext>(
  options => options.UseSqlServer("Server=NOTEBOOK-BANGHO;Database=Sapucai;Integrated Security=True;TrustServerCertificate=True;"));

// Agregar configuración de Swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Mi API", Version = "v1" });
});

var app = builder.Build();

// Configurar Swagger
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Mi API V1");
    c.RoutePrefix = "swagger"; // Esto puede ayudar a resolver problemas de ruta
});


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseCors();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();









/*



using Microsoft.EntityFrameworkCore;



using miBilletera.Data;

using Microsoft.Extensions.DependencyInjection;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<MiDbContext>(
  options=>options.UseSqlServer( "Server=DESKTOP-UU8OQRO;Database=Corrientes;Integrated Security=True;"));
var app = builder.Build();


// Configure the HTTP request pipeline.     "Server=DESKTOP-UU8OQRO;Database=Corrientes;Integrated Security=True;"
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
*/
