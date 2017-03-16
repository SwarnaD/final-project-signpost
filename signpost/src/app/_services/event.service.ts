import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  addEvent(name, description, location, campus): Observable<Boolean> {
    var request = {
        'name' : name,
        'description' : description,
        'location' : location,
        'campus' : campus
    }
    return this.http.post('/api/events', request)
      .map((response: Response) => {
        let error = response.json().body.error;
        if(error){
        return false;
        }else {
        return true;
        }
      });

  }

  getEvent(id) {
    return this.http.get('/api/events/' + id)
      .map((response: Response) => response.json());
  }

}
