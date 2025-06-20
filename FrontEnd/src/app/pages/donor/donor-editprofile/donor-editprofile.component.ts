import { Component } from '@angular/core';
import { NavbarDonorComponent } from '../components/navbar-donor/navbar-donor.component';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-donor-editprofile',
  imports: [NavbarDonorComponent,FormsModule],
  templateUrl: './donor-editprofile.component.html',
  styleUrl: './donor-editprofile.component.css'
})
export class DonorEditprofileComponent {
  updateData ={
    name:'Anish Kumar',
    email:'anishyadav@7853@gmail.com',
    phone:'+91 9877472261',
    bloodgroup:'O+',
    location:'Hinjewadi,phase 3'
  };


  onSubmit(){
    console.log("update profle",this.updateData);
  }
}
