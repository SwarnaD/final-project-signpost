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
    var request = {
      'email': email,
      'password': password
    }
    return this.http.post('/api/auth', request)
      .map((response: Response) => {
        let success = response.json() && response.json().body.token;
        this.token = response.json().body.token;
        if (success) {
          localStorage.setItem('userSession', JSON.stringify({ 'email': email, 'token': this.token}));
          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('userSession');
  }

}
