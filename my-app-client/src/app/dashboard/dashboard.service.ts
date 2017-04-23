import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../core/authentication.service';

@Injectable()
export class DashboardService {

  constructor(
    private authenticationService: AuthenticationService,
    private http: Http
  ) { }

  getProfile(): Observable<any> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.getToken() });
    let options = new RequestOptions({ headers: headers });

    return this.http
    .get('/dashboard', options)
    .map((r: Response) => r.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));;
  };

}