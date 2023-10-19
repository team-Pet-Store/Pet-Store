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

  constructor(private authService: AuthService, private router: Router , private GeneralServices : GeneralService ) { }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next : (response: any) => {
        if(response){
          localStorage.setItem("token" , response.token)
          localStorage.setItem("role" , response.payload.role)
          this.GeneralServices.token = response.token
          if(this.GeneralServices.role === "admin"){
            this.router.navigate(['admin-home']);
          }else {
            this.router.navigate(['']);
          }
          
        }
        console.log(response , "succceddddd")
      },
      error :(error: any) => {
        if (error) {
          this.loginError = error.error.error
          // console.log(this.loginError);
          alert(this.loginError )
        }
      }
    }
    );
  }

}
