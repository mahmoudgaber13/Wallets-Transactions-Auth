using EPLTask.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EPLTask.Interface
{
    public interface IWallet
    {
        public void NewWallet(string UserMobile);
        public bool Transfer(TransferModel transactionModel);
    }
}
