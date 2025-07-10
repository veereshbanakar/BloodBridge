import { Component, OnInit } from '@angular/core';
import { NavbarDonorComponent } from '../components/navbar-donor/navbar-donor.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { DonorService, UpdateProfileData } from '../../../services/donor.service';

@Component({
  selector: 'app-donor-editprofile',
  imports: [NavbarDonorComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './donor-editprofile.component.html',
  styleUrl: './donor-editprofile.component.css'
})
export class DonorEditprofileComponent implements OnInit {
  updateData: UpdateProfileData = {
    name: '',
    email: '',
    age: 0,
    blood_group: '',
    phone: '',
    location: ''
  };

  private currentUser: any = null;
  isLoading = false;
  message = '';

  constructor(private donorService: DonorService, private router: Router) {}

  ngOnInit(): void {
    const currentUserData = localStorage.getItem('currentUser');
    if (currentUserData) {
      this.currentUser = JSON.parse(currentUserData);
      this.updateData.name = this.currentUser.name || '';
      this.updateData.email = this.currentUser.email || '';
      this.updateData.phone = this.currentUser.phone || '';
      this.updateData.blood_group = this.currentUser.blood_group || '';
      this.updateData.location = this.currentUser.location || '';
      this.updateData.age = this.currentUser.age || 0;
    }
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.isLoading = true;
      this.message = '';

      this.donorService.updateProfile(this.updateData).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.message = response.message;
          console.log('Profile updated successfully:', response);

          this.updateLocalStorage();

          setTimeout(() => {
            this.router.navigate(['/donor/profile']);
          }, 1500);
        },
        error: (error) => {
          this.isLoading = false;
          this.message = 'Error updating profile. Please try again.';
          console.error('Error updating profile:', error);
        }
      });
    } else {
      this.message = 'Please fix the validation errors before submitting.';
      this.markAllFieldsAsTouched();
    }
  }

  private isFormValid(): boolean {
    return this.isValidName() && 
           this.isValidEmail() && 
           this.isValidAge() && 
           this.isValidPhone() && 
           this.isValidBloodGroup() && 
           this.isValidLocation();
  }

  private isValidName(): boolean {
    const name = this.updateData.name?.trim();
    const nameRegex = /^[a-zA-Z\s]+$/;
    return !!(name && 
              name.length >= 2 && 
              name.length <= 50 && 
              nameRegex.test(name));
  }

  private isValidEmail(): boolean {
    const email = this.updateData.email?.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !!(email && emailRegex.test(email));
  }

  private isValidAge(): boolean {
    const age = this.updateData.age;
    return !!(age && age >= 18 && age <= 65);
  }

  private isValidPhone(): boolean {
    const phone = this.updateData.phone?.trim();
    const phoneRegex = /^[0-9]{10}$/;
    return !!(phone && phoneRegex.test(phone));
  }

  private isValidBloodGroup(): boolean {
    const validBloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    return !!(this.updateData.blood_group && 
              validBloodGroups.includes(this.updateData.blood_group));
  }

  private isValidLocation(): boolean {
    const location = this.updateData.location?.trim();
    return !!(location && 
              location.length >= 2 && 
              location.length <= 100);
  }

  private markAllFieldsAsTouched(): void {
    console.log('All fields should be marked as touched for validation display');
  }

  private updateLocalStorage(): void {
    try {
      const currentUserData = localStorage.getItem('currentUser');

      if (currentUserData) {
        const existingUser = JSON.parse(currentUserData);
        const updatedUser = {
          ...existingUser,
          name: this.updateData.name?.trim(),
          email: this.updateData.email?.trim(),
          phone: this.updateData.phone?.trim(),
          blood_group: this.updateData.blood_group,
          location: this.updateData.location?.trim(),
          age: this.updateData.age
        };

        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      } else {
        console.warn('No currentUser found in localStorage');
      }
    } catch (error) {
      console.error('Error updating localStorage:', error);
    }
  }
  sanitizeInput(value: string): string {
    return value?.trim() || '';
  }

  formatPhoneNumber(phone: string): string {
    return phone.replace(/\D/g, '');
  }
}