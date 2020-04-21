using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.Extensions.Options;

namespace BaGet.Configuration
{
    public class ConfigureCorsOptions : IConfigureOptions<CorsOptions>
    {
        public const string CorsPolicy = "AllowAll";

        public void Configure(CorsOptions options)
        {
            options.AddPolicy(
                CorsPolicy,
                builder => builder.WithOrigins("http://localhost:21230", "http://localhost:50561",
                "https://develop.qcompusoft.com",
                "https://develop.qcompusoft.com/nuget")
                .AllowAnyHeader()
                .AllowCredentials()
                .AllowAnyMethod());
        }
    }
}
