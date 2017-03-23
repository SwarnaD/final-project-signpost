import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { GroupService } from '../_services/group.service';
import { EventService } from '../_services/event.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  currentUser;
  _id: String;
  name: String;
  groups: any = [];
  allGroups: any = [];
  events: any = [];
  allEvents: any = [];

  constructor(
    private eventService: EventService,
    private groupService: GroupService,
    private userService: UserService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._id = params['id'];
    });
    this.getAllEvents();
  }

  getAllEvents(){
    this.eventService.getAllEvents().subscribe(e => {
      this.allEvents = e;
    });
  }

}
