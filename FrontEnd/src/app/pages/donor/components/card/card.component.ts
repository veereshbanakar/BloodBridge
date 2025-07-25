import { Component, Input } from '@angular/core';
import { BloodRequest } from '../../../../shared/BloodRequest.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() request!: BloodRequest;
}
