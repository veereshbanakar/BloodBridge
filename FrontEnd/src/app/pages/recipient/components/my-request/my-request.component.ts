import { Component, Input } from '@angular/core';
import { Request } from '../../../../services/recipient.service';

@Component({
  selector: 'app-my-request',
  imports: [],
  templateUrl: './my-request.component.html',
  styleUrl: './my-request.component.css'
})
export class MyRequestComponent {
 @Input() request!:Request;
}
