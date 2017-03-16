import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class GroupService {

  constructor(private http: Http) { }

  addGroup(name, description, campus): Observable<Boolean> {
    var request = {
        'name' : name,
        'description' : description,
        'campus' : campus
    }
    return this.http.post('/api/groups', request)
      .map((response: Response) => {
        let error = response.json().body.error;
        if(error){
        return false;
        }else {
        return true;
        }
      });

  }

}
