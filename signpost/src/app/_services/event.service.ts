import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  addEvent(groupId, name, description, location, campus, tags): Observable<Boolean> {
    var request = {
        'groupId' : groupId,
        'name' : name,
        'description' : description,
        'location' : location,
        'campus' : campus,
        'tags' : tags
    }
    return this.http.post('/api/events', request)
      .map((response: Response) => {
        let error = response.json().body.error;
        if(error){
        return false;
        } else {
        return true;
        }
      });

  }

  getEvent(id) {
    return this.http.get('/api/events/' + id)
      .map((response: Response) => response.json());
  }

  getAllEvents() {
    return this.http.get('/api/events/')
      .map((response: Response) => response.json());
  }

}
