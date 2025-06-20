import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-navbar-recipient',
  imports: [],
  templateUrl: './navbar-recipient.component.html',
  styleUrl: './navbar-recipient.component.css'
})
export class NavbarRecipientComponent implements OnInit {
  currentUrl: string = '';
  home:string = 'recipient/dashboard';
  donors:string = 'recipient/donors';
  response:string = 'recipient/responsebydonor';

  homeIsActive: boolean = false;
  donorsIsActive: boolean = false;
  responseIsActive: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Using snapshot (gets the URL at the time of component initialization)
    this.currentUrl = this.route.snapshot.url.join('/');

    // Using observable (gets the URL and updates if it changes)
    this.route.url.subscribe(urlSegments => {
      this.currentUrl = urlSegments.join('/');
    });
    console.log(this.currentUrl+" -- "+ this.home);
    if(this.currentUrl==this.home){
      this.homeIsActive= !this.homeIsActive;
    }else if(this.currentUrl==this.donors){
      this.donorsIsActive = !this.donorsIsActive;
    }
    else if(this.currentUrl = this.response){
      this.responseIsActive = !this.responseIsActive;
    }
  }
}
