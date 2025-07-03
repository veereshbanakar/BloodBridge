import { Component, OnInit } from '@angular/core';
import { NavbarRecipientComponent } from '../components/navbar-recipient/navbar-recipient.component';
import { CardComponent } from '../components/card/card.component';
import { NewRequestComponent } from '../components/new-request/new-request.component';
import { CommonModule } from '@angular/common';
import { MyRequestComponent } from '../components/my-request/my-request.component';
import { RecipientService, Request} from '../../../services/recipient.service';

@Component({
  selector: 'app-recipient-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarRecipientComponent, NewRequestComponent, MyRequestComponent],
  templateUrl: './recipient-dashboard.component.html',
  styleUrl: './recipient-dashboard.component.css'
})
export class RecipientDashboardComponent implements OnInit {
    showForm = false;
    requests: Request[] = [];
    loading = false;
    error: string | null = null;
    constructor(private recipentService: RecipientService){};

    ngOnInit(): void {
      this.loadRequests();
    }

    loadRequests(): void{

      this.loading = true;
      this.error = null;

      this.recipentService.getAllRequestsByRecipient().subscribe({
        next: (response)=>{
          if(response.status === 'success'){
            this.requests = response.requests;
            this.loading = false;
          }
        },
        error:(err)=>{
          this.error = "Failed to load Requests. Please try again.";
          this.loading = false;
          console.error('Error loading requests',err);
        }
      });

    }

    trackByRequestId(index: number, request: Request):string {
      return request.id;
    }



}
