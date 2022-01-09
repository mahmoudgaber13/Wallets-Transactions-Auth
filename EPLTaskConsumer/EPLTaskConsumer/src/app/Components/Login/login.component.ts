import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/AuthService/auth.service';
import { TokenStorageService } from '../../Services/tokenStorageService/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    Mobile: null,
    Password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {
    const { mobile, password } = this.form;

    this.authService.login(mobile, password).subscribe(
      (res: any) => {
        this.tokenStorage.saveToken(res.token);
        this.tokenStorage.saveUser(res);
        this.tokenStorage.saveMobile(res.mobile);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        if (res.role == "Admin") {
           this.router.navigate(['/transaction']);
        }
        else {
          this.router.navigate(['/wallet']);
        }

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
      () => {
        this.reloadPage();
      }
    );
  }

  reloadPage(): void {
    location.reload();
  }
}
