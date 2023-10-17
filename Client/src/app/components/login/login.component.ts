import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        if(response){
        this.router.navigate(['homePage']);
        }
        console.log(response , "succceddddd")
      },
      (error: any) => {
        if (error) {
          this.loginError = error.error.message || 'An error occurred during login.';
        } else {
          this.loginError = 'An error occurred during login.';
        }
      }
    );
  }

}
