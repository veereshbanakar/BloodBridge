import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { DonorService } from '../../../../services/donor.service';
import { BloodRequest } from '../../../../services/donor.service';


@Component({
  selector: 'app-neaby-request-list',
  imports: [CardComponent,CommonModule],
  templateUrl: './neaby-request-list.component.html',
  styleUrl: './neaby-request-list.component.css'
})
export class NeabyRequestListComponent implements OnInit {
  loading = false;
  error: string | null = null;


  ngOnInit(): void {
      this.loadRequests();
  }
  constructor(private donorSevice: DonorService){}
  bloodRequests!:BloodRequest[];

  selectedFilter = signal<'ALL'| 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'>('ALL');
  allBloodRequests: BloodRequest[] =[];

  loadRequests():void{

    this.loading = true;
    this.error = null;

    this.donorSevice.getRequestsForDonor().subscribe({
      next: (res) => {
        if(res.status === 'success'){
        this.allBloodRequests = res.donorSpecificRequests;
        this.loading = false;
        this.applyFilter();
        }
      },
      error: (err) => {
        console.error('Failed to fetch blood requests:', err);
        this.loading = false;
        this.error = "Failed to fetch blood requests"
        this.bloodRequests = [];
        this.noRequestFound = true;
      }

    });
  }

  noRequestFound = false;
  applyFilter() {
    const filter = this.selectedFilter();
    
    if (filter === 'ALL') {
      // console.log(filter);
      this.bloodRequests = [...this.allBloodRequests];
    } else {
      console.log(filter)
      this.bloodRequests = this.allBloodRequests.filter(d => d.urgencyLevel === filter);
    }
    // console.log(this.donations)
    this.noRequestFound = this.bloodRequests.length === 0;
  }

  filterBy(type:'ALL' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'){
    this.selectedFilter.set(type);
    this.applyFilter();
  }


}
