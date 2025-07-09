import { Component, OnInit } from '@angular/core';
import { NavbarDonorComponent } from '../components/navbar-donor/navbar-donor.component';
import { ResponseCardComponent } from '../components/response-card/response-card.component';
import { ChatbotComponent } from '../components/chatbot/chatbot.component';
import { DonorResponse, DonorService } from '../../../services/donor.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-donor-response',
  imports: [NavbarDonorComponent,ResponseCardComponent, CommonModule],
  templateUrl: './donor-response.component.html',
  styleUrl: './donor-response.component.css'
})
export class DonorResponseComponent implements OnInit {

  allresponses:DonorResponse[]=[]

  constructor(private donorService: DonorService){}
  isLoading:boolean = false;
  error:string  | null = null;
  ngOnInit(): void {
    this.donorService.loadResponses();
    this.loadRequest();
      
  }
  loadRequest():void{
    this.isLoading = true;

    this.donorService.responses$.subscribe({
      next:(res)=>{
        this.isLoading = false;
        this.allresponses = res;

      },
      error: (err)=>{
        this.error = "Failed to load responses";
        this.isLoading = false;
        this.allresponses = [];
      }
    })


  }
}
