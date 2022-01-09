using EPLTask.Interface;
using EPLTask.Models;
using EPLTask.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EPLTask.Controllers
{
    [Authorize(Roles ="User")]
    [Route("api/[controller]")]
    [ApiController]
    public class WalletController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IWallet walletService;
        public WalletController(ApplicationDbContext context, IWallet walletService)
        {
            this.context = context;
            this.walletService = walletService;
        }

        [Route("TransferBalance")]
        [HttpPost]
        public async Task<IActionResult> TransferBalance([FromForm] TransferModel transferModel)
        {
            if (transferModel.RecieverMobile==transferModel.SenderMobile)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "You can't transfer to yourself!" });
            }
            bool Result =  walletService.Transfer(transferModel);
            if (Result)
            {
                return Ok(new Response { Status = "Success", Message = "Transaction Done successfully!" });
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Your balance is not enough!" });
            }
        }



    }
}
