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

  isLoading = false;
  message = '';

  constructor(private donorService: DonorService, private router: Router) {}

  onSubmit() {
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
  }

  private updateLocalStorage(): void {
    try {

      const currentUserData = localStorage.getItem('currentUser');

      if (currentUserData) {

        const existingUser = JSON.parse(currentUserData);
        const updatedUser = {
          ...existingUser,
          name: this.updateData.name,
          email: this.updateData.email,
          phone: this.updateData.phone,
          blood_group: this.updateData.blood_group,
          location: this.updateData.location,
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
}