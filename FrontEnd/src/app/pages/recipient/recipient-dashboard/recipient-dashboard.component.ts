import { Component } from '@angular/core';
import { NavbarRecipientComponent } from '../components/navbar-recipient/navbar-recipient.component';
import { CardComponent } from '../components/card/card.component';
import { NewRequestComponent } from '../components/new-request/new-request.component';
import { CommonModule } from '@angular/common';
import { MyRequestComponent } from '../components/my-request/my-request.component';

@Component({
  selector: 'app-recipient-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarRecipientComponent, NewRequestComponent, MyRequestComponent],
  templateUrl: './recipient-dashboard.component.html',
  styleUrl: './recipient-dashboard.component.css'
})
export class RecipientDashboardComponent {
    showForm = false;
}
