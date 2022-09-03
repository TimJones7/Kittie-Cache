using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RestSharp;
using System.Net.Http.Headers;

namespace APIGateway.Controllers
{

    // 'http://localhost:1000/api-gateway/project'

    [Route("api-gateway/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {

        private RestClient projClient = new RestClient("http://projectService_c:4000/api/projects");


        private readonly ILogger<ProjectController> _logger;

        public ProjectController(ILogger<ProjectController> logger)
        {
            _logger = logger;
            _logger.LogInformation("Project Controller Hit...");
        }


        //  Add error checking and log for those!

        [HttpGet]
        public IActionResult GetAllProjects()
        {
            _logger.LogInformation("Get All Public Projects Entry...");

            RestRequest request = new RestRequest();
            _logger.LogInformation("Fetching From Project Microservice...");
            var result = projClient.GetAsync(request).Result.Content;
            _logger.LogInformation("Sending Json Reponse Projects to client...");
            return Ok(result);
        }
    }
}
