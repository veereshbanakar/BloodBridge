import { Component, Input } from '@angular/core';
import { Donor } from '../../../../services/recipient.service';

@Component({
  selector: 'app-available-donor',
  imports: [],
  templateUrl: './available-donor.component.html',
  styleUrl: './available-donor.component.css'
})
export class AvailableDonorComponent {
  @Input() donor!: Donor;
}
