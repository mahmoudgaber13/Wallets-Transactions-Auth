using EPLTask.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EPLTask.Interface
{
    public interface ITransaction
    {
        public void NewTransaction(string SenderMobile, string RecieverMobile, double Amount);
        public List<Transaction> ViewTransactions();

    }
}
