import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  public token: String;

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('userSession'));
    this.token = currentUser && currentUser.token;
  }

  login(email, password): Observable<Boolean> {
    return this.http.post('/api/auth', JSON.stringify({ email: email, password: password}))
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          console.log('token received: ', this.token);
          localStorage.setItem('userSession', JSON.stringify({ email: email, token: token}));
          return true;
        } else {
          return false;
        }
      })
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('userSession');
  }

}
