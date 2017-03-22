import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../_models/event';
import { EventService } from '../_services/event.service';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  model: Event = { name: '', description: '', location: '', campus: '', tags: '', date: ''}
  error = '';
  _id: String;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._id = params['id'];
    });
  }

  createEvent() {
    console.log(this._id);
    this.eventService.addEvent(this._id, this.model.name, this.model.description, this.model.location, this.model.campus, this.model.tags, this.model.date).subscribe(result => {
      if (result === true) {
        this.router.navigate(['/']);
      } else {
        this.error = 'invalid event name, already exists';
      }
    });

  }

}
