using EPLTask.Interface;
using EPLTask.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EPLTask.Services
{
    public class TransactionService : ITransaction
    {
        private readonly ApplicationDbContext context;
        public TransactionService(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void NewTransaction(string SenderMobile, string RecieverMobile, double Amount)
        {
            Transaction transaction = new Transaction()
            {
                SenderMobile = SenderMobile,
                RecieverMobile = RecieverMobile,
                Amount = Amount
            };
            context.Transactions.AddAsync(transaction);
            context.SaveChanges();
        }

        public List<Transaction> ViewTransactions()
        {
            return context.Transactions.ToList();
        }
    }
}
