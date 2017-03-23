import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { GroupService } from '../_services/group.service';
import { EventService } from '../_services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  _id: String;
  event: any = [];
  events: any = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private groupService: GroupService,
    private eventService: EventService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._id = params['id'];
    });
  }

  getEvent() {
    this.eventService.getEvent(this._id).subscribe(event => {
      this.event = event;
    });
  }
  getAllEvents(){
    this.eventService.getAllEvents().subscribe(events => {
      console.log("hi");
      this.events = events;
    });
  }
}
