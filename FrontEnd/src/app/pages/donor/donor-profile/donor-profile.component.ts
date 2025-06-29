import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarDonorComponent } from '../components/navbar-donor/navbar-donor.component';

@Component({
  selector: 'app-donor-profile',
  imports: [NavbarDonorComponent,RouterModule],
  templateUrl: './donor-profile.component.html',
  styleUrl: './donor-profile.component.css'
})
export class DonorProfileComponent {

}
