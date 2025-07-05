import { Component, Input } from '@angular/core';
import { BloodRequest } from '../../../../services/donor.service';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() request!:  BloodRequest;
}
