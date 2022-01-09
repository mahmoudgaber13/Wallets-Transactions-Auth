using EPLTask.Models;
using EPLTask.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace EPLTask.Controllers
{
    [Authorize(Roles ="Admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        private readonly  ITransaction transactionService;

        public TransactionController(ITransaction transactionService)
        {
            this.transactionService = transactionService;
        }

        [Route("GetTransactions")]
        [HttpGet]
        public List<Transaction> GetTransactions()
        {
            return transactionService.ViewTransactions();
        }

    }
}
