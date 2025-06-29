import { Component } from '@angular/core';
import { NavbarRecipientComponent } from '../components/navbar-recipient/navbar-recipient.component';
import { AvailableDonorComponent } from '../components/available-donor/available-donor.component';

@Component({
  selector: 'app-donors',
  imports: [NavbarRecipientComponent, AvailableDonorComponent],
  templateUrl: './donors.component.html',
  styleUrl: './donors.component.css'
})
export class DonorsComponent {

}
