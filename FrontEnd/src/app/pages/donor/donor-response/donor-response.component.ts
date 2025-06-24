import { Component } from '@angular/core';
import { NavbarDonorComponent } from '../components/navbar-donor/navbar-donor.component';
import { ResponseCardComponent } from '../components/response-card/response-card.component';
import { ChatbotComponent } from '../components/chatbot/chatbot.component';

@Component({
  selector: 'app-donor-response',
  imports: [NavbarDonorComponent,ResponseCardComponent, ChatbotComponent],
  templateUrl: './donor-response.component.html',
  styleUrl: './donor-response.component.css'
})
export class DonorResponseComponent {

}
