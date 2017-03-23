import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { GroupService } from '../_services/group.service';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  _id: String;
  group: any = [];
  groups: any = [];
  

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
    });
  }
  getAllGroups(){
    this.groupService.getAllGroups().subscribe(groups => {
      this.groups = groups;
    });
  }
  

}
