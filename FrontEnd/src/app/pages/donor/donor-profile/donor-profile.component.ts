import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarDonorComponent } from '../components/navbar-donor/navbar-donor.component';
import { ChatbotComponent } from '../components/chatbot/chatbot.component';

@Component({
  selector: 'app-donor-profile',
  imports: [NavbarDonorComponent,ChatbotComponent,RouterModule],
  templateUrl: './donor-profile.component.html',
  styleUrl: './donor-profile.component.css'
})
export class DonorProfileComponent {

}
