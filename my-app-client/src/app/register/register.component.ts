import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  onSubmit(name, email, password) {
    let user: any = {
      name,
      email,
      password
    };
    this.authenticationService.register(user).subscribe(
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
