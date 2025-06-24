import { Component } from '@angular/core';



import { NavbarDonorComponent } from '../components/navbar-donor/navbar-donor.component';
import { WelcomeCardComponent } from '../components/welcome-card/welcome-card.component';
import { NeabyRequestListComponent } from '../components/neaby-request-list/neaby-request-list.component';
import { ChatbotComponent } from '../components/chatbot/chatbot.component';


@Component({
  selector: 'app-donor-dashboard',
  imports: [NavbarDonorComponent,WelcomeCardComponent,NeabyRequestListComponent,ChatbotComponent],
  templateUrl: './donor-dashboard.component.html',
  styleUrl: './donor-dashboard.component.css'
})
export class DonorDashboardComponent {

  
}
