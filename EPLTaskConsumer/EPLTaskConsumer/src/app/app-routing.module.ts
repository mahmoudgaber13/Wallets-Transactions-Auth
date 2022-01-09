import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './Components/App/app.component';
import { LoginComponent } from './Components/Login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { TransactionComponent } from './Components/Transaction/transaction.component';
import { WalletComponent } from './Components/Wallet/wallet.component';

const routes: Routes = [
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'wallet', component: WalletComponent },
{ path: 'transaction', component: TransactionComponent },
{ path: 'app', component: AppComponent },
{ path: '', redirectTo: '/', pathMatch: 'full' },
{path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
