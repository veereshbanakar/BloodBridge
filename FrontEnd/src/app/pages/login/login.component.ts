import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService, LoginRequest } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    const currentUser = localStorage.getItem('userRole');
    if (currentUser == 'donor') {
      this.router.navigate(['/donor/dashboard']);
    }
    else if (currentUser == 'recipient') {
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

  // Form validation state
  formSubmitted = false;
  validationErrors: { [key: string]: string } = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.isLoading) return;

    this.formSubmitted = true;
    this.clearMessages();

    // Validate form before submission
    if (!this.validateForm()) {
      return;
    }

    this.isLoading = true;

    if (this.loginData.role == "recipient") {
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
    else if (this.loginData.role == 'donor') {
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

  private validateForm(): boolean {
    this.validationErrors = {};
    let isValid = true;

    // Email validation
    if (!this.loginData.email || this.loginData.email.trim() === '') {
      this.validationErrors['email'] = 'Email is required';
      isValid = false;
    } else if (!this.isValidEmail(this.loginData.email)) {
      this.validationErrors['email'] = 'Please enter a valid email address';
      isValid = false;
    }

    // Password validation
    if (!this.loginData.password || this.loginData.password.trim() === '') {
      this.validationErrors['password'] = 'Password is required';
      isValid = false;
    } else if (this.loginData.password.length < 6) {
      this.validationErrors['password'] = 'Password must be at least 6 characters long';
      isValid = false;
    } else if (this.loginData.password.length > 128) {
      this.validationErrors['password'] = 'Password must not exceed 128 characters';
      isValid = false;
    }

    // Role validation
    if (!this.loginData.role || this.loginData.role.trim() === '') {
      this.validationErrors['role'] = 'Please select a role (Donor or Recipient)';
      isValid = false;
    } else if (!['donor', 'recipient'].includes(this.loginData.role)) {
      this.validationErrors['role'] = 'Please select a valid role';
      isValid = false;
    }

    return isValid;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Real-time validation methods
  validateEmail(): void {
    if (this.formSubmitted) {
      if (!this.loginData.email || this.loginData.email.trim() === '') {
        this.validationErrors['email'] = 'Email is required';
      } else if (!this.isValidEmail(this.loginData.email)) {
        this.validationErrors['email'] = 'Please enter a valid email address';
      } else {
        delete this.validationErrors['email'];
      }
    }
  }

  validatePassword(): void {
    if (this.formSubmitted) {
      if (!this.loginData.password || this.loginData.password.trim() === '') {
        this.validationErrors['password'] = 'Password is required';
      } else if (this.loginData.password.length < 6) {
        this.validationErrors['password'] = 'Password must be at least 6 characters long';
      } else if (this.loginData.password.length > 128) {
        this.validationErrors['password'] = 'Password must not exceed 128 characters';
      } else {
        delete this.validationErrors['password'];
      }
    }
  }

  validateRole(): void {
    if (this.formSubmitted) {
      if (!this.loginData.role || this.loginData.role.trim() === '') {
        this.validationErrors['role'] = 'Please select a role (Donor or Recipient)';
      } else if (!['donor', 'recipient'].includes(this.loginData.role)) {
        this.validationErrors['role'] = 'Please select a valid role';
      } else {
        delete this.validationErrors['role'];
      }
    }
  }

  private clearMessages() {
    this.errorMessage = '';
    this.successMessage = '';
  }

  // Helper method to check if form is valid
  isFormValid(): boolean {
    return Object.keys(this.validationErrors).length === 0 && 
           !!this.loginData.email && 
           !!this.loginData.password && 
           !!this.loginData.role;}
}