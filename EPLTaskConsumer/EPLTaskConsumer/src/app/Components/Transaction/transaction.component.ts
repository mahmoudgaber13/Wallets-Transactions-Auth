import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../Services/TransactionService/transaction.service';
import { TransactionModel } from 'src/app/ViewModels/transaction-model';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/Services/tokenStorageService/token-storage.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
   transactions: TransactionModel[]=[];
  constructor(private transactionService : TransactionService,private tokenStorageService:TokenStorageService,private router: Router) { 
    
  }

  ngOnInit(): void {
    if(!this.tokenStorageService.getMobile()||!this.tokenStorageService.getUser().roles.includes('Admin'))
    {
      this.router.navigate(['/login']);
    }
    else{
      this.transactionService.GetTransactions().subscribe((data: any[])=>{
        console.log(data);
        this.transactions = data;
      })
    }
      
  }
}
