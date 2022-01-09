import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TokenStorageService } from '../tokenStorageService/token-storage.service';



@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) { }
   
  GetTransactions(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json' ,
      })
    };
 
    console.log(httpOptions);
    
    return this.http.get(environment.baseUrl + 'Transaction/GetTransactions', httpOptions );
  }
 
}
