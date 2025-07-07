import { Component, Input } from '@angular/core';
import { BloodRequest, DonorService } from '../../../../services/donor.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-card',
  imports: [RouterModule,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() request!:  BloodRequest;

  constructor(private donorService: DonorService,private router: Router){}

  isAccepting = false;
  acceptRequest():void{
    this.isAccepting = true;
    this.donorService.acceptRequest(this.request.id).subscribe({
      next:(res)=>{
        if(res.status=='success'){
          this.isAccepting = false;
          this.router.navigate(['/donor/response']);
        }

      },
      error:(error)=>{
        console.log("Error accepting request");
        this.isAccepting = false;
      }
    })
  }
}
