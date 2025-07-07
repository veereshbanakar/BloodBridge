import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarDonorComponent } from '../components/navbar-donor/navbar-donor.component';
import { ChatbotComponent } from '../components/chatbot/chatbot.component';
import { Donor } from '../../../services/recipient.service';

@Component({
  selector: 'app-donor-profile',
  imports: [NavbarDonorComponent,ChatbotComponent,RouterModule],
  templateUrl: './donor-profile.component.html',
  styleUrl: './donor-profile.component.css'
})
export class DonorProfileComponent implements OnInit {
  name: string= "";
  email: string = "";
  phone: string = "";
  blood_group: string = "";
  location:string = "";
  age: string = "";


  ngOnInit(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      this.name = user.name;
      this.email = user.email;
      this.phone = user.phone;
      this.blood_group = user.blood_group;
      this.location = user.location;
      this.age = user.age;
    }
  }


}
