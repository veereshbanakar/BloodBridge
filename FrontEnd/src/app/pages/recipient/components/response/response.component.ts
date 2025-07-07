import { Component, Input } from '@angular/core';
import { Request } from '../../../../services/recipient.service';


@Component({
  selector: 'app-response',
  imports: [],
  templateUrl: './response.component.html',
  styleUrl: './response.component.css'
})
export class ResponseComponent {
  @Input() request!: Request;
}
