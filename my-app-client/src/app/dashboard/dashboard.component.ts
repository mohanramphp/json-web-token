import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../core/authentication.service';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;
  constructor(
    private authenticationService: AuthenticationService,
    private dashboardService: DashboardService,
    private router: Router
  ) { }

  logout() {
    if(confirm('Are you sure to logout?')){
      this.authenticationService.logout();
      this.router.navigate(['/login']);
    }
  }
  ngOnInit() {
    this.dashboardService.getProfile().subscribe(
      (data) => {
        this.user = data;
      },
      error => {
        console.log(error);
        this.router.navigate(['/login']);
      }
    );
  }

}
