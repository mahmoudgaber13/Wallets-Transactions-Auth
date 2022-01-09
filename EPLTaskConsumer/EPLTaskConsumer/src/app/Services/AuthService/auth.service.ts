import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginModel } from 'src/app/ViewModels/login-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginModel :LoginModel = { mobile:"",password:""}

  constructor(private http: HttpClient ) { }

  login(mobile: string, password: string): Observable<any> {
    this.loginModel.mobile = mobile;
    this.loginModel.password= password;
    return this.http.post(environment.baseUrl + 'Authenticate/login', this.loginModel, httpOptions);
  }

 

  register(Username: string, Mobile: string, Password: string): Observable<any> {
    const form = new FormData;
    form.append('Username', Username);
    form.append('Mobile', Mobile);
    form.append('Password', Password);
    return this.http.post(environment.baseUrl + 'Authenticate/register', form);
  }
}
