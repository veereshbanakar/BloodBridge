import { Component, OnInit } from '@angular/core';
import { NavbarRecipientComponent } from '../components/navbar-recipient/navbar-recipient.component';
import { ResponseComponent } from '../components/response/response.component';
import { RecipientService, Request } from '../../../services/recipient.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-donors-responses',
  imports: [NavbarRecipientComponent,ResponseComponent,CommonModule],
  templateUrl: './donors-responses.component.html',
  styleUrl: './donors-responses.component.css'
})
export class DonorsResponsesComponent implements OnInit {
  acceptedRequests: Request[] = [];
  loading = false;
  error: string | null = null;

  constructor(private recipientService: RecipientService){}

  ngOnInit(): void {
    this.loading = true;
    this.error = null;

    this.loadResponse();
  }
  loadResponse():void{
    this.recipientService.getAcceptedRequests().subscribe({
      next: (data) => {
        if(data.status=="success"){
          const requests = data.requests;
          this.acceptedRequests = requests.filter((req)=>req.status  == 'ACCEPTED');
          this.loading = false;
        }
      },
      error: (err) => {
        console.error('Failed to load donor responses', err);
        this.loading = false;
        this.error = "Failed to load donor's response";
      }
    });
  }
  trackByRequestId(index: number, request: Request):string {
    return request.id;
  }
}
