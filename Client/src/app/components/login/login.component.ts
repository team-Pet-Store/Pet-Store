import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/genral.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router , private GeneralService : GeneralService ) { }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next : (response: any) => {
        if(response){
          localStorage.setItem("token" , response.token)
          localStorage.setItem("role" , response.payload.role)
          this.GeneralService.token = response.token
        this.router.navigate(['home-page']);
        }
        console.log(response , "succceddddd")
      },
      error :(error: any) => {
        if (error) {
          this.loginError = error.error.message || 'An error occurred during login.';
        } else {
          this.loginError = 'An error occurred during login.';
        }
      }
    }
    );
  }

}
