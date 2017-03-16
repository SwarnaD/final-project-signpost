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
        let _id = response.json().body._id;
        let name = response.json().body.name;
        if (success) {
          localStorage.setItem('userSession', JSON.stringify({  '_id': _id, 'name': name, 'email': email, 'token': this.token }));
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

  register(name, email, password): Observable<Boolean> {
    var request = {
      'name': name,
      'email': email,
      'password': password
    }
    return this.http.post('/api/users', request)
      .map((response: Response) => {
        let error = response.json().body.error;
        if (error) {
          return false;
        } else {
          // automatically log user in after successful registration
          this.login(email, password);
          return true;
        }
      });
  }

}
