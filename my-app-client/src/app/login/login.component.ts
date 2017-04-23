import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  onSubmit(email, password) {
    let user: any = {
      email,
      password
    };
    this.authenticationService.login(user).subscribe(
      () => {
        this.router.navigate(['/dashboard']);
      },
      error => alert(error)
    );
    return false;
  };

  ngOnInit() {
  }



}
