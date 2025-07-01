import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarRecipientComponent } from '../components/navbar-recipient/navbar-recipient.component';
import { AvailableDonorComponent } from '../components/available-donor/available-donor.component';
import { DonorService, Donor } from '../../../services/recipient.service';

@Component({
  selector: 'app-donors',
  imports: [CommonModule, NavbarRecipientComponent, AvailableDonorComponent],
  templateUrl: './donors.component.html',
  styleUrl: './donors.component.css'
})
export class DonorsComponent implements OnInit {
  donors: Donor[] = [];
  loading = false;
  error: string | null = null;

  constructor(private donorService: DonorService) {}

  ngOnInit(): void {
    this.loadDonors();
  }

  loadDonors(): void {
    this.loading = true;
    this.error = null;
    
    this.donorService.getAllDonors().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.donors = response.donors.filter(donor => donor.is_available);
          this.loading = false;
        }
      },
      error: (err) => {
        console.log("anish error--",err);
        this.error = 'Failed to load donors. Please try again.';
        this.loading = false;
        console.error('Error loading donors:', err);
      }
    });
  }

  trackByDonorId(index: number, donor: Donor): string {
    return donor.id;
  }
}