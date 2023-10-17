import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  signupError: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.signup(this.firstName, this.lastName, this.email, this.password).subscribe(
      (response: any) => {
        if (response) {
          this.router.navigate(['/login']);
        }
      },
      (error: any) => {
        if (error) {
          this.signupError = error.error.message; 
        } else {
          this.signupError = 'An error occurred during registration.';
        }
      }
    );
  }
}
