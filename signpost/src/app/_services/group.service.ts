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

  getFollowedGroups(userID) {
    return this.http.get('/api/groups/follower/' + userID)
      .map((response: Response) => response.json());
  }

  getGroup(groupId) {
    return this.http.get('/api/groups/' + groupId)
      .map((response: Response) => response.json());
  }

  getAllGroups() {
    return this.http.get('/api/groups/')
      .map((response: Response) => response.json());
  }

  editGroup(name,description,campus,tags,groupId) {
  var request = {
	  'name' : name,
	  'description' : description,
	  'campus' : campus,
	  'tags' : tags
   }
    return this.http.put('/api/groups/' + groupId, request)
      .map((response: Response) => {
        let success = response.json() && response.json().message;
        if (success) {
          return true;
        } else {
          return false;
        }
      });
  }

  followGroup(userId, groupId) {
    var request = {
      'groupId': groupId
    }
    return this.http.put('/api/groups/follower/' + userId, request)
      .map((response: Response) => {
        let success = response.json() && response.json().message;
        if (success) {
          return true;
        } else {
          return false;
        }
      });
  }
  
  getByTag(tags){
    var request = {
    'tags' : tags
    }
    console.log(tags);
    return this.http.get('/api/groups/search/' + tags)
      .map((response: Response) => response.json());
  }
  
}
