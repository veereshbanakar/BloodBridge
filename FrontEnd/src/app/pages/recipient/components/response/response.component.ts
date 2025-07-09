import { Component, Input } from '@angular/core';
import { RecipientService, Request } from '../../../../services/recipient.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-response',
  imports: [CommonModule],
  templateUrl: './response.component.html',
  styleUrl: './response.component.css'
})
export class ResponseComponent {
  @Input() request!: Request;

  constructor(private recipientService: RecipientService){}
  isFullfilling = false;
  fullfill(): void{
    this.isFullfilling = true;
    this.recipientService.fullfillRequest(this.request.id).subscribe({
      next:(res)=>{
        if(res.status=='success'){
          this.isFullfilling = false;
          this.recipientService.loadAllRequestsByRecipient();
        }
      },
      error:(error)=>{
        console.log("Error fullfilling request");
        this.isFullfilling  = false;
      }
    })
  }
}
