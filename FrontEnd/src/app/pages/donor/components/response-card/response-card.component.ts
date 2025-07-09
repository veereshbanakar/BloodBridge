import { Component, Input } from '@angular/core';
import { DonorResponse, DonorService } from '../../../../services/donor.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-response-card',
  imports: [RouterModule,CommonModule],
  templateUrl: './response-card.component.html',
  styleUrl: './response-card.component.css'
})
export class ResponseCardComponent {
  @Input() responses!: DonorResponse;

  constructor(private donorSerivce: DonorService,private router: Router){}

  isCancelling = false;

  cancelRequest():void{
    this.isCancelling = true;
    this.donorSerivce.cancelRequest(this.responses.requestId).subscribe({
      next: (res)=>{
        if(res.status == 'success'){
          this.isCancelling = false;
          this.donorSerivce.loadResponses();
        }
      },
      error:(error)=>{
        console.log("Error cancelling request");
        this.isCancelling = false;
      }
    })
  }
}
