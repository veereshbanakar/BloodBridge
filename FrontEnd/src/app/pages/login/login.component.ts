import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginData = {
    email: '',
    password: '',
    role:''
};

onSubmit() {
    
    console.log('Login submitted:', this.loginData);
   }
}
