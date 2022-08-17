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
        private RestClient projClient = new RestClient("http://localhost:4000/api/projects");

        [HttpGet]
        public IActionResult GetAllProjects()
        {
            RestRequest request = new RestRequest();

            
            var result = projClient.GetAsync(request).Result.Content;
    
            return Ok(result);
        }
    }
}
