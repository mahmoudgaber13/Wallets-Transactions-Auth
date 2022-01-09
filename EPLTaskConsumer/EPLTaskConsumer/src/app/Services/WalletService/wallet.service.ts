import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  Transfer(SenderMobile: string, RecieverMobile: string, Amount: string): Observable<any> {
    const form = new FormData();
    form.append('SenderMobile', SenderMobile);
    form.append('RecieverMobile', RecieverMobile);
    form.append('Amount', Amount);
    return this.http.post(environment.baseUrl + 'Wallet/TransferBalance', form
    );
  }
}


