import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm!: FormGroup 
  signupError: string | null = null;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { firstName, lastName, email, password } = this.signupForm.value;
      this.authService.signup(firstName, lastName, email, password)
        .subscribe({
          next :  (response: any) => {
            this.router.navigate(['/login']);
          },
          error :  (error: any) => {
            if (error.error && error.error.message) {
              this.signupError = error.error.message;
            } else {
              this.signupError = 'An error occurred during registration.';
            }
          }
        });
    }
  }
}
