import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-donor',
  imports: [],
  templateUrl: './navbar-donor.component.html',
  styleUrl: './navbar-donor.component.css'
})
export class NavbarDonorComponent implements OnInit{
  currentUrl: string = '';
  home:string = 'donor/dashboard';
  response:string = 'donor/response';
  profile:string = 'donor/profile';

  homeIsActive: boolean = false;
  responseIsActive: boolean = false;
  profileIsActive: boolean = false;

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
    }else if(this.currentUrl==this.response){
      this.responseIsActive = !this.responseIsActive;
    }
    else if(this.currentUrl = this.profile){
      this.profileIsActive = !this.profileIsActive;
    }
  }
}
