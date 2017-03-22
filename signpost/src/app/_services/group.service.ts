import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class GroupService {

  constructor(private http: Http) { }

  addGroup(userid, name, description, campus, tags): Observable<Boolean> {
    var request = {
        'userid': userid,
        'name' : name,
        'description' : description,
        'campus' : campus,
        'tags' : tags
    }
    return this.http.post('/api/groups', request)
      .map((response: Response) => {
        let success = response.json() && response.json().message;
        if (success) {
          return true;
        } else {
          return false;
        }
      });
  }

  getOwnedGroups(userID) {
    return this.http.get('/api/groups/user/' + userID)
      .map((response: Response) => response.json());
  }

  getGroup(groupId) {
  console.log('/api/groups/' + groupId);
    return this.http.get('/api/groups/' + groupId)
      .map((response: Response) => response.json());
  }

  getAllGroups() {
    return this.http.get('/api/groups/')
      .map((response: Response) => response.json());
  }

  editGroup(name,description,campus,tags,groupId): Observable<Boolean> {
    var request = {
	'name': name,
	'description': description,
	'campus': campus,
	'tags': tags
    }
    return this.http.put('/api/groups/' + groupId, request)
      .map((response: Response) => response.json());
  }
}
