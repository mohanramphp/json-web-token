import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  saveToken(token): void {
    window.localStorage['mean-token'] = token;
  };

  getToken(): string {
    return window.localStorage['mean-token'];
  };

  isLoggedIn(): boolean {
    let token = this.getToken();
    let payload;

    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      payload = JSON.parse(payload);
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  };

  currentUser(): any {
    if (this.isLoggedIn()) {
      let token = this.getToken();
      let payload: any = token.split('.')[1];
      payload = window.atob(payload);
      payload = JSON.parse(payload);
      return {
        email: payload.email,
        name: payload.name
      };
    }
  };
  
  register(user:any): Observable<void> {
    return this.http
      .post('/register', JSON.stringify(user))
      .map((response: Response) => {
        this.saveToken(response.json().token);
      });
  };

  login(user): Observable<void> {
    return this.http
      .post('/login', JSON.stringify(user))
      .map((response: Response) => {
        this.saveToken(response.json().token);
      });
  };

  logout(): void {
    window.localStorage.removeItem('mean-token');
  };

}
