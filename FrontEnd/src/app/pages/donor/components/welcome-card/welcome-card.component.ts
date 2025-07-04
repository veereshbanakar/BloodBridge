import { Component, OnInit } from '@angular/core';
import { Donor } from '../../../../services/recipient.service';
import { DonorService } from '../../../../services/donor.service';

@Component({
  selector: 'app-welcome-card',
  imports: [],
  templateUrl: './welcome-card.component.html',
  styleUrl: './welcome-card.component.css'
})
export class WelcomeCardComponent implements OnInit {

  name: string ="";
  isAvailableForDonation: boolean | null = null;
constructor(private donorService: DonorService){}

  ngOnInit(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      this.name = user.name;
      this.isAvailableForDonation = user.is_available;
    }
  }

  toggleAvailability(): void {
    this.isAvailableForDonation = !this.isAvailableForDonation;

    this.donorService.updateAvailability(this.isAvailableForDonation).subscribe({
      next: (res)=>{
        const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
        user.is_available = this.isAvailableForDonation;
        localStorage.setItem('currentUser', JSON.stringify(user));
      },
      error:(err)=>{
        console.error('Error updating availablity',err);
      }
    })
    
  }

}
