import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BloodRequest} from "../../../../shared/BloodRequest.model";
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-neaby-request-list',
  imports: [CardComponent,CommonModule],
  templateUrl: './neaby-request-list.component.html',
  styleUrl: './neaby-request-list.component.css'
})
export class NeabyRequestListComponent {
  bloodRequests: BloodRequest[] = [
    {
      id: 1,
      name:"Prabhanshu",
      bloodType: 'A+',
      urgency: 'URGENT',
      title: 'Emergency Surgery Required',
      description: 'Patient needs immediate blood transfusion for emergency surgery. Critical condition.',
      location: 'City Hospital',
      distance: '2.1 km',
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      name:"Aman",
      bloodType: 'O-',
      urgency: 'HIGH',
      title: 'Accident Victim Support',
      description: 'Road accident victim requires O- blood type. Family requesting immediate help.',
      location: 'Metro Hospital',
      distance: '3.5 km',
      timeAgo: '4 hours ago'
    },
    {
      id: 3,
      name:"Tarun",
      bloodType: 'B+',
      urgency: 'MEDIUM',
      title: 'Planned Surgery',
      description: 'Scheduled surgery next week requires B+ blood donation. Pre-booking requested.',
      location: 'Apollo Clinic',
      distance: '1.8 km',
      timeAgo: '1 day ago'
    },
    {
      id: 4,
      name:"Abhay",
      bloodType: 'AB+',
      urgency: 'LOW',
      title: 'Blood Bank Restocking',
      description: 'Local blood bank running low on AB+ reserves. Routine donation drive.',
      location: 'Red Cross Center',
      distance: '4.2 km',
      timeAgo: '2 days ago'
    }
  ];
}
