import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../_models/group';
import { GroupService } from '../_services/group.service'
@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  model: Group = { name: '', description: '', campus: '', tags: ''}
  error = '';
  _id: String;

  constructor(
    private groupService: GroupService,
    private router: Router) {
  }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('userSession'));
    this._id = currentUser._id;
  }

  createGroup() {
    this.groupService.addGroup(this._id, this.model.name, this.model.description, this.model.campus, this.model.tags).subscribe(result => {
      if (result === true) {
        this.router.navigate(['/']);
      } else {
        this.error = 'invalid group';
      }
    });

  }

}
