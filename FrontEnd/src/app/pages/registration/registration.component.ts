import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService, DonorRegistrationRequest, RecipientRegistrationRequest } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  selectedType: 'donor' | 'recipient' = 'donor';
  selectedFile: File | null = null;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  @ViewChild('donorForm') donorForm!: NgForm;
  @ViewChild('recipientForm') recipientForm!: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  submitForm() {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;

    if (this.selectedType === 'donor') {
      this.registerDonor();
    } else {
      this.registerRecipient();
    }
  }

  private registerDonor() {
    if (!this.donorForm.valid) {
      this.errorMessage = 'Please fill in all required fields';
      this.isLoading = false;
      return;
    }

    const formData = this.donorForm.value;
    const registrationData: DonorRegistrationRequest = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      age: formData.age,
      blood_group: formData.bloodGroup,
      location: formData.address,
      phone: formData.phone,
    };

    this.authService.registerDonor(registrationData).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success') {
          this.successMessage = 'Registration successful! Redirecting...';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        } else {
          this.errorMessage = response.message || 'Registration failed';
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error?.error?.message || 'Registration failed. Please try again.';
        console.error('Registration error:', error);
      }
    });
  }

  private registerRecipient() {
    if (!this.recipientForm.valid) {
      this.errorMessage = 'Please fill in all required fields';
      this.isLoading = false;
      return;
    }

    const formData = this.recipientForm.value;
    const registrationData: RecipientRegistrationRequest = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      password: formData.password
    };

    this.authService.registerRecipient(registrationData).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success') {
          this.successMessage = 'Registration successful! Redirecting...';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        } else {
          this.errorMessage = response.message || 'Registration failed';
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error?.error?.message || 'Registration failed. Please try again.';
        console.error('Registration error:', error);
      }
    });
  }

  // Helper method to clear messages when switching between donor/recipient
  onTypeChange() {
    this.errorMessage = '';
    this.successMessage = '';
    this.selectedFile = null;
  }
}