using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using ShoppR.Data;
using ShoppR.Extensions;

namespace ShoppR
{
    public class Program
    {
        public static async Task Main(string[] args) => 
            await CreateHostBuilder(args)
                .Build()
                .Migrate<ApplicationContext>()
                .Seed()
                .RunAsync();

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => 
                    webBuilder.UseStartup<Startup>());
    }
}
