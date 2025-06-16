import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  imports: [],
  templateUrl: './welcome-card.component.html',
  styleUrl: './welcome-card.component.css'
})
export class WelcomeCardComponent {
  isAvailableForDonation = true;
  toggleAvailability(): void {
    this.isAvailableForDonation = !this.isAvailableForDonation;
  }
}
