using APIGateway.Data;
using Microsoft.EntityFrameworkCore;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


//var logger = new LoggerConfiguration()
//    .ReadFrom.Configuration(builder.Configuration)
//    .Enrich.FromLogContext()
//    .CreateLogger();
//builder.Logging.ClearProviders();
//builder.Logging.AddSerilog(logger);

//Placeholder Comment for change


//builder.Host.UseSerilog((context, config) => 
//{
//    var connectionString = context.Configuration.GetConnectionString("DefaultConnection");

//    config.WriteTo.PostgreSQL(connectionString, "GatewayLogs", needAutoCreateTable: true)
//    .MinimumLevel.Information();

//});






builder.Services.AddControllers();


//builder.Services.AddDbContext<UserDbContext>(options =>
//{
//    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
//});


builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins("http://localhost:2000");
        });
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{

}

app.UseHttpsRedirection();

//app.UseSerilogRequestLogging();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
