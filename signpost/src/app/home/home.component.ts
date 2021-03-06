import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { GroupService } from '../_services/group.service';
import { User } from '../_models/user';
import { Group } from '../_models/group';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser;
  _id: String;
  name: String;
  groups: any = [];
  allGroups: any = [];

  model: Group = { name: '', description: '', campus: '', tags: ''}

  followedGroups: any = [];

  constructor(
    private groupService: GroupService,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('userSession'));
    this._id = this.currentUser._id;
    this.name = this.currentUser.name;
    this.getGroups();
    this.getAllGroups();
    this.getFollowedGroups();
  }

  getGroups() {
    this.groupService.getOwnedGroups(this._id).subscribe(groups => {
      this.groups = groups;
    });
  }
  getAllGroups(){
    this.groupService.getAllGroups().subscribe(g => {
      this.allGroups = g;
    });
  }
    searchByTags(){
    this.groupService.getByTag(this.model.tags).subscribe(g => {
      this.allGroups = g;
   
    });
  }

  getFollowedGroups() {
    this.groupService.getFollowedGroups(this._id).subscribe(fg => {
      this.followedGroups = fg;
    });
  }

}
