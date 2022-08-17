using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RestSharp;

namespace APIGateway.Controllers
{
    // 'http://localhost:1000/api-gateway/comment'

    [Route("api-gateway/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private RestClient commentClient = new RestClient("http://localhost:3000/api/comments");


        [HttpGet]
        public IActionResult GetAllComments()
        {
            RestRequest request = new RestRequest();


            var result = commentClient.GetAsync(request).Result.Content;

            return Ok(result);
        }


    }
}
