import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../_models/group';
import { GroupService } from '../_services/group.service'

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {
  error = '';

  constructor(
      private groupService: GroupService,
      private router: Router) {
  }

  ngOnInit() {
  }
  /*register() {
      this.groupService.editGroup(this._id, this.model.name, this.model.description, this.model.campus, this.model.tags).subscribe(result => {
      if (result === true) {
          this.router.navigate([/]);
      } else {
          this.error = 'invalid edit';
      }
   });
   }*/
}
