import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/Services/tokenStorageService/token-storage.service';
import { WalletService } from '../../Services/WalletService/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  form: any = {
    SenderMobile: null,
    RecieverMobile: null,
    Amount: null
  };
  isSuccessful = false;
  isNotSuccessful = false;
  errorMessage = '';
  constructor(private WalletService: WalletService, private tokenStorageService: TokenStorageService, private router: Router) {

  }

  ngOnInit(): void {
    if (!this.tokenStorageService.getMobile() || !this.tokenStorageService.getUser().roles.includes('User')) {
      this.router.navigate(['/login']);
    }

  }
  onSubmit(): void {
    this.form.SenderMobile = this.tokenStorageService.getMobile();
    const { SenderMobile, RecieverMobile, Amount } = this.form;

    this.WalletService.Transfer(SenderMobile, RecieverMobile, Amount).subscribe(
      (res: any) => {
        console.log(res);
        this.isSuccessful = true;
      },
      err => {
        console.log(err.error.message);
        this.isNotSuccessful = true;
        this.errorMessage = err.error.message;
      }
    );
  }

}
