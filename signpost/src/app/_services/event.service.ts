import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  addEvent(groupId, name, description, location, campus, tags, date): Observable<Boolean> {
    var request = {
        'groupId' : groupId,
        'name' : name,
        'description' : description,
        'location' : location,
        'campus' : campus,
        'tags' : tags,
        'date' : date
    }
    return this.http.post('/api/events', request)
      .map((response: Response) => {
        let success = response.json() && response.json().message;
        if (success) {
          return true;
        } else {
          return false;
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

  getEventsByGroupIdAndTags(groupId, tags) {
    return this.http.get('/api/events/group/' + groupId + '/' + tags)
      .map((response: Response) => response.json());
  }

  editEvent(name,description,location,campus,date,tags,groupId) {
  var request = {
    'name' : name,
    'description' : description,
    'location' : location,
    'campus' : campus,
    'date' : date,
    'tags' : tags
   }
    return this.http.put('/api/events/' + groupId, request)
      .map((response: Response) => {
        let success = response.json() && response.json().message;
        if (success) {
          return true;
        } else {
          return false;
        }
      });
  }
}
