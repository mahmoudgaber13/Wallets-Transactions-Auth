using EPLTask.Interface;
using EPLTask.Models;
using EPLTask.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EPLTask.Services
{
    public class WalletService : IWallet
    {
        private readonly ApplicationDbContext context;
        private readonly ITransaction transactionService;
        public WalletService(ApplicationDbContext context, ITransaction transactionService)
        {
            this.context = context;
            this.transactionService = transactionService;
        }

        public  void NewWallet(string UserMobile)
        {
            Wallet wallet = new Wallet()
            {
                Amount = 1000,
                UserMobile = UserMobile
            };
             context.Wallets.Add(wallet);
             context.SaveChanges();
        }

        public  bool Transfer(TransferModel transferModel)
        {
            var SenderWallet = context.Wallets.Where(w => w.UserMobile == transferModel.SenderMobile).FirstOrDefault();
            if (SenderWallet.Amount >= transferModel.Amount && transferModel.RecieverMobile != transferModel.SenderMobile) 
            {
                SenderWallet.Amount -= transferModel.Amount;
                context.Wallets.Where(w => w.UserMobile == transferModel.RecieverMobile).FirstOrDefault().Amount += transferModel.Amount;

                transactionService.NewTransaction(transferModel.SenderMobile, transferModel.RecieverMobile, transferModel.Amount);

                 context.SaveChangesAsync();
                return true;
            }
            else
            {
                return false;
            }

        }

        
    }
}
