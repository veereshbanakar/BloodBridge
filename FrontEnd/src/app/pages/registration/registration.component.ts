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
  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  // Form validation errors
  validationErrors: { [key: string]: string } = {};

  @ViewChild('donorForm') donorForm!: NgForm;
  @ViewChild('recipientForm') recipientForm!: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // Validation methods
  validateName(name: string): boolean {
    if (!name || name.trim().length < 2) {
      this.validationErrors['name'] = 'Name must be at least 2 characters long';
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      this.validationErrors['name'] = 'Name can only contain letters and spaces';
      return false;
    }
    delete this.validationErrors['name'];
    return true;
  }

  validateEmail(email: string): boolean {
    if (!email) {
      this.validationErrors['email'] = 'Email is required';
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.validationErrors['email'] = 'Please enter a valid email address';
      return false;
    }
    delete this.validationErrors['email'];
    return true;
  }

  validatePassword(password: string): boolean {
    if (!password) {
      this.validationErrors['password'] = 'Password is required';
      return false;
    }
    if (password.length < 6) {
      this.validationErrors['password'] = 'Password must be at least 6 characters long';
      return false;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      this.validationErrors['password'] = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
      return false;
    }
    delete this.validationErrors['password'];
    return true;
  }

  validateAge(age: number, isDonor: boolean = false): boolean {
    if (!age) {
      this.validationErrors['age'] = 'Age is required';
      return false;
    }
    if (age < 1 || age > 120) {
      this.validationErrors['age'] = 'Please enter a valid age';
      return false;
    }
    if (isDonor && (age < 18 || age > 65)) {
      this.validationErrors['age'] = 'Age must be between 18 and 65 years for donors';
      return false;
    }
    delete this.validationErrors['age'];
    return true;
  }

  validateBloodGroup(bloodGroup: string): boolean {
    if (!bloodGroup) {
      this.validationErrors['bloodGroup'] = 'Blood group is required';
      return false;
    }
    if (!this.bloodGroups.includes(bloodGroup.toUpperCase())) {
      this.validationErrors['bloodGroup'] = 'Please enter a valid blood group (A+, A-, B+, B-, AB+, AB-, O+, O-)';
      return false;
    }
    delete this.validationErrors['bloodGroup'];
    return true;
  }

  validateAddress(address: string): boolean {
    if (!address || address.trim().length < 10) {
      this.validationErrors['address'] = 'Address must be at least 10 characters long';
      return false;
    }
    delete this.validationErrors['address'];
    return true;
  }

  validatePhone(phone: string): boolean {
    if (!phone) {
      this.validationErrors['phone'] = 'Phone number is required';
      return false;
    }
    // Indian phone number validation (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      this.validationErrors['phone'] = 'Please enter a valid 10-digit Indian phone number';
      return false;
    }
    delete this.validationErrors['phone'];
    return true;
  }

  // Field validation triggers
  onNameChange(event: any) {
    this.validateName(event.target.value);
  }

  onEmailChange(event: any) {
    this.validateEmail(event.target.value);
  }

  onPasswordChange(event: any) {
    this.validatePassword(event.target.value);
  }

  onAgeChange(event: any, isDonor: boolean = false) {
    this.validateAge(parseInt(event.target.value), isDonor);
  }

  onBloodGroupChange(event: any) {
    this.validateBloodGroup(event.target.value);
  }

  onAddressChange(event: any) {
    this.validateAddress(event.target.value);
  }

  onPhoneChange(event: any) {
    this.validatePhone(event.target.value);
  }

  // Check if form is valid based on validation errors
  isFormValid(): boolean {
    return Object.keys(this.validationErrors).length === 0;
  }

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
    
    // Validate all fields before submission
    const isNameValid = this.validateName(formData.name);
    const isEmailValid = this.validateEmail(formData.email);
    const isPasswordValid = this.validatePassword(formData.password);
    const isAgeValid = this.validateAge(formData.age, true);
    const isBloodGroupValid = this.validateBloodGroup(formData.bloodGroup);
    const isAddressValid = this.validateAddress(formData.address);
    const isPhoneValid = this.validatePhone(formData.phone);

    if (!isNameValid || !isEmailValid || !isPasswordValid || !isAgeValid || !isBloodGroupValid || !isAddressValid || !isPhoneValid) {
      this.errorMessage = 'Please correct the validation errors';
      this.isLoading = false;
      return;
    }

    const registrationData: DonorRegistrationRequest = {
      name: formData.name.trim(),
      email: formData.email.toLowerCase().trim(),
      password: formData.password,
      age: formData.age,
      blood_group: formData.bloodGroup.toUpperCase(),
      location: formData.address.trim(),
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
    
    // Validate all fields before submission
    const isNameValid = this.validateName(formData.name);
    const isEmailValid = this.validateEmail(formData.email);
    const isPasswordValid = this.validatePassword(formData.password);
    const isAgeValid = this.validateAge(formData.age, false);
    const isAddressValid = this.validateAddress(formData.address);
    const isPhoneValid = this.validatePhone(formData.phone);

    if (!isNameValid || !isEmailValid || !isPasswordValid || !isAgeValid || !isAddressValid || !isPhoneValid) {
      this.errorMessage = 'Please correct the validation errors';
      this.isLoading = false;
      return;
    }

    const registrationData: RecipientRegistrationRequest = {
      name: formData.name.trim(),
      email: formData.email.toLowerCase().trim(),
      phone: formData.phone,
      address: formData.address.trim(),
      password: formData.password,
      age: formData.age
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
    this.validationErrors = {}; // Clear validation errors
  }
}