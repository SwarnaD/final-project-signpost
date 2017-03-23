import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { GroupService } from '../_services/group.service';
import { Group } from '../_models/group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  _id: String;
  group: any = [];
  groups: any = [];
  following = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private groupService: GroupService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._id = params['id'];
    });
    this.getGroup();
  }

  getGroup() {
  	console.log(this._id);
    this.groupService.getGroup(this._id).subscribe(group => {
      this.group = group;
      // oh boy! this is a poor poor implementation!
      var userId = (JSON.parse(localStorage.getItem('userSession')))._id;
      if (group.followers.includes(userId)) {
        this.following = true;
      }
    });
  }
  getAllGroups(){
    this.groupService.getAllGroups().subscribe(groups => {
      this.groups = groups;
    });
  }

  followGroup() {
    var userId = (JSON.parse(localStorage.getItem('userSession')))._id;
    this.groupService.followGroup(userId, this._id)
      .subscribe(result => {
        if (result === true) {
          alert("You are now following " + this._id + "!");
          this.getGroup();
        } else {
          alert("Something wenta wronga!");
        }
      });
  }

}
