import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BloodRequest} from "../../../../shared/BloodRequest.model";
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-neaby-request-list',
  imports: [CardComponent,CommonModule],
  templateUrl: './neaby-request-list.component.html',
  styleUrl: './neaby-request-list.component.css'
})
export class NeabyRequestListComponent implements OnInit {
  
  ngOnInit(): void {
      this.applyFilter();
  }
  bloodRequests!:BloodRequest[]; 

  selectedFilter = signal<'ALL'| 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'>('ALL');
  allBloodRequests: BloodRequest[] =[
    {
      id: 1,
      name: "Prabhanshu",
      bloodType: "A+",
      urgency: "URGENT",
      title: "Emergency Surgery Required",
      description: "Patient needs immediate blood transfusion for emergency surgery. Critical condition.",
      location: "City Hospital",
      distance: "2.1 km",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      name: "Aman",
      bloodType: "O-",
      urgency: "HIGH",
      title: "Accident Victim Support",
      description: "Road accident victim requires O- blood type. Family requesting immediate help.",
      location: "Metro Hospital",
      distance: "3.5 km",
      timeAgo: "4 hours ago"
    },
    {
      id: 3,
      name: "Tarun",
      bloodType: "B+",
      urgency: "MEDIUM",
      title: "Planned Surgery",
      description: "Scheduled surgery next week requires B+ blood donation. Pre-booking requested.",
      location: "Apollo Clinic",
      distance: "1.8 km",
      timeAgo: "1 day ago"
    },
    {
      id: 4,
      name: "Abhay",
      bloodType: "AB+",
      urgency: "LOW",
      title: "Blood Bank Restocking",
      description: "Local blood bank running low on AB+ reserves. Routine donation drive.",
      location: "Red Cross Center",
      distance: "4.2 km",
      timeAgo: "2 days ago"
    },
    {
      id: 5,
      name: "Nisha",
      bloodType: "O+",
      urgency: "URGENT",
      title: "Childbirth Complication",
      description: "Urgent need for O+ blood due to complications during childbirth. Immediate response needed.",
      location: "Mother & Child Care Center",
      distance: "2.6 km",
      timeAgo: "1 hour ago"
    },
    {
      id: 6,
      name: "Ravi",
      bloodType: "B-",
      urgency: "HIGH",
      title: "Cancer Patient Transfusion",
      description: "Ongoing treatment for leukemia requires regular B- blood transfusions. Seeking donors.",
      location: "Fortis Oncology Wing",
      distance: "5.0 km",
      timeAgo: "6 hours ago"
    },
    {
      id: 7,
      name: "Simran",
      bloodType: "A-",
      urgency: "MEDIUM",
      title: "Scheduled Heart Surgery",
      description: "Donor required for heart surgery scheduled in 3 days. A- blood group needed.",
      location: "Heart Care Hospital",
      distance: "2.9 km",
      timeAgo: "18 hours ago"
    },
    {
      id: 8,
      name: "Manoj",
      bloodType: "AB-",
      urgency: "HIGH",
      title: "Rare Blood Type Needed",
      description: "AB- is rare and urgently required for liver transplant patient.",
      location: "Global Health Hospital",
      distance: "6.2 km",
      timeAgo: "3 hours ago"
    },
    {
      id: 9,
      name: "Kavya",
      bloodType: "O+",
      urgency: "LOW",
      title: "School Blood Donation Camp",
      description: "Volunteers welcome for annual school donation drive. All types appreciated.",
      location: "Greenwood High School",
      distance: "1.2 km",
      timeAgo: "3 days ago"
    },
    {
      id: 10,
      name: "Deepak",
      bloodType: "B+",
      urgency: "MEDIUM",
      title: "Dialysis Support",
      description: "Patient undergoing weekly dialysis requires regular B+ donations. Community appeal.",
      location: "NephroCare Clinic",
      distance: "2.4 km",
      timeAgo: "12 hours ago"
    }
  ];
  

  noRequestFound = false;
  applyFilter() {
    const filter = this.selectedFilter();
    
    if (filter === 'ALL') {
      // console.log(filter);
      this.bloodRequests = [...this.allBloodRequests];
    } else {
      console.log(filter)
      this.bloodRequests = this.allBloodRequests.filter(d => d.urgency === filter);
    }
    // console.log(this.donations)
    this.noRequestFound = this.bloodRequests.length === 0;
  }

  filterBy(type:'ALL' | 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'){
    this.selectedFilter.set(type);
    this.applyFilter();
  }


}
