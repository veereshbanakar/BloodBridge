import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarRecipientComponent } from '../components/navbar-recipient/navbar-recipient.component';
import { AvailableDonorComponent } from '../components/available-donor/available-donor.component';
import { RecipientService, Donor } from '../../../services/recipient.service';

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

  constructor(private recipientService: RecipientService) {}

  ngOnInit(): void {
    this.loadDonors();
  }

  loadDonors(): void {
    this.loading = true;
    this.error = null;
    this.recipientService.loadDonors();
    this.recipientService.donor$.subscribe((res)=>{
      this.donors = res.filter((donor)=>donor.is_available==true); 
      this.loading = false;
    })
  }

  trackByDonorId(index: number, donor: Donor): string {
    return donor.id;
  }
}