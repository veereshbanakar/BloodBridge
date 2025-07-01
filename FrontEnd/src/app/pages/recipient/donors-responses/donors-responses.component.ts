import { Component } from '@angular/core';
import { NavbarRecipientComponent } from '../components/navbar-recipient/navbar-recipient.component';
import { ResponseComponent } from '../components/response/response.component';


@Component({
  selector: 'app-donors-responses',
  imports: [NavbarRecipientComponent, ResponseComponent],
  templateUrl: './donors-responses.component.html',
  styleUrl: './donors-responses.component.css'
})
export class DonorsResponsesComponent {

}
