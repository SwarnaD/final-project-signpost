import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../_models/event';
import { EventService } from '../_services/event.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  error = '';
  _id: String;
  event: any = [];
  model: Event = { name: '', description: '', location: '', campus: '', tags: '', date: ''}


  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private eventService: EventService) {
        }

  ngOnInit() {
      this.route.params.subscribe(params => {
            this._id = params['id'];
      });
      this.getEvent();
  }

  getEvent() {
    this.eventService.getEvent(this._id).subscribe(event => {
      this.event = event;
      this.model = {name: this.event.name, description: this.event.description, location: this.event.location, campus: this.event.campus, tags: this.event.tags, date : this.event.date}
      console.log(this.model);
    });
  }

  editEvent() {
      this.eventService.editEvent(this.model.name, this.model.description, this.model.location, this.model.campus, this.model.tags, this.model.date, this._id).subscribe(result => {
      if (result === true) {
          this.router.navigate(['/']);
      } else {
          this.error = 'invalid edit';
      }
   });
   }
}
