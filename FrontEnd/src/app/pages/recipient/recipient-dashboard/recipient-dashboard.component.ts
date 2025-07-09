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
      this.loading  = true;
      this.recipentService.loadAllRequestsByRecipient();
      this.recipentService.requests$.subscribe({
        next: (res) => {
          this.requests = res.reverse();
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load requests';
          this.loading = false;
        }
      })
    }

    trackByRequestId(index: number, request: Request):string {
      return request.id;
    }



}
