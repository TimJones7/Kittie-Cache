using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RestSharp;

namespace APIGateway.Controllers
{
    // 'http://localhost:1000/api-gateway/ticket'

    [Route("api-gateway/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private RestClient ticketClient = new RestClient("http://host.docker.internal:5000/api/tickets");


        [HttpGet]
        public IActionResult GetAllTickets()
        {
            RestRequest request = new RestRequest();


            var result = ticketClient.GetAsync(request).Result.Content;

            return Ok(result);
        }
    }
}
