import { Component, Input } from '@angular/core';
import { DonorResponse } from '../../../../services/donor.service';

@Component({
  selector: 'app-response-card',
  imports: [],
  templateUrl: './response-card.component.html',
  styleUrl: './response-card.component.css'
})
export class ResponseCardComponent {
  @Input() responses!: DonorResponse;
}
