import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../_models/event';
import { EventService } from '../_services/event.service';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  model: Event = { name: '', description: '', location: '', campus: ''}
  error = '';

  constructor(
    private eventService: EventService,
    private router: Router) {
  }

  ngOnInit() {
  }

  createEvent() {
    this.eventService.addEvent(this.model.name, this.model.description, this.model.location, this.model.campus).subscribe(result => {
      if (result === false) {
        this.router.navigate(['/']);
      } else {
        this.error = 'invalid event name, already exists';
      }
    });

  }

}
