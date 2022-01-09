import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './Helpers/auth.interceptor'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/Components/App/app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from '../app/Components/Login/login.component';
import { WalletComponent } from './Components/Wallet/wallet.component';
import { TransactionComponent } from './Components/Transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    WalletComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
