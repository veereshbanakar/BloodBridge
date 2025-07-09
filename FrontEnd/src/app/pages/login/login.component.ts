import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router ,RouterModule} from '@angular/router';
import { AuthService, LoginRequest } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
      const currentUser = localStorage.getItem('userRole');
      if(currentUser=='donor'){
        this.router.navigate(['/donor/dashboard']);
      }
      else if(currentUser=='recipient'){
        this.router.navigate(['/recipient/dashboard']);
      }

  }
  loginData: LoginRequest = {
    email: '',
    password: '',
    role: '',
  };

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  onSubmit() {
    if (this.isLoading) return;

    this.isLoading = true;
    this.clearMessages();

    if(this.loginData.role=="recipient"){
      this.authService.loginReciever(this.loginData).subscribe({
        next: (response) => {
          this.successMessage = 'Login successful!';
          
          // Redirect based on user role
          setTimeout(() => {
            if (this.loginData.role === 'donor') {
              this.router.navigate(['/donor/dashboard']);
            } else if (this.loginData.role === 'recipient') {
              this.router.navigate(['/recipient/dashboard']);
            } else {
              this.router.navigate(['/login']);
            }
          }, 1000);
        },
        error: (error) => {
          console.error('Login error:', error);
          this.isLoading = false;
          
          // Handle specific error messages
          if (error.status === 401) {
            this.errorMessage = 'Invalid email or password';
          } else if (error.status === 404) {
            this.errorMessage = 'User not found';
          } else if (error.error?.message) {
            this.errorMessage = error.error.message;
          } else {
            this.errorMessage = 'Login failed. Please try again.';
          }
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
    else if(this.loginData.role=='donor'){
      this.authService.loginDonor(this.loginData).subscribe({
        next: (response) => {
          this.successMessage = 'Login successful!';
          
          // Redirect based on user role
          setTimeout(() => {
            if (this.loginData.role === 'donor') {
              this.router.navigate(['/donor/dashboard']);
            } else if (this.loginData.role === 'recipient') {
              this.router.navigate(['/recipient/dashboard']);
            } else {
              this.router.navigate(['/login']);
            }
          }, 1000);
        },
        error: (error) => {
          console.error('Login error:', error);
          this.isLoading = false;
          
          // Handle specific error messages
          if (error.status === 401) {
            this.errorMessage = 'Invalid email or password';
          } else if (error.status === 404) {
            this.errorMessage = 'User not found';
          } else if (error.error?.message) {
            this.errorMessage = error.error.message;
          } else {
            this.errorMessage = 'Login failed. Please try again.';
          }
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }

    
  }

  private clearMessages() {
    this.errorMessage = '';
    this.successMessage = '';
  }
}