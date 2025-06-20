import { Component } from '@angular/core';
import { NavbarRecipientComponent } from '../components/navbar-recipient/navbar-recipient.component';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-recipient-dashboard',
  imports: [NavbarRecipientComponent, CardComponent],
  templateUrl: './recipient-dashboard.component.html',
  styleUrl: './recipient-dashboard.component.css'
})
export class RecipientDashboardComponent {

}
