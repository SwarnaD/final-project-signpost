import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthService } from '../_services/auth';
import { User } from '../_models/user';

@Injectable()
export class UserService {

  constructor(http: Http, authService: AuthService) { }

  getUsers(): Observable<User[]> {
    let headers = new Headers({ 'authToken': this.authService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('/api/users', options)
      .map((response: Reponse) => response.json());
  }

}
