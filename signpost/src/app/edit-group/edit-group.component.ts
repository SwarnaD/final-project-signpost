import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../_models/group';
import { GroupService } from '../_services/group.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {
  error = '';
  _id: String;
  group: any = [];
  model: Group ={name: '' ,description: '' ,campus:'',tags:''}


  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private groupService: GroupService) {
        }

  ngOnInit() {
      this.route.params.subscribe(params => {
            this._id = params['id'];
      });
      this.getGroup();
  }

  getGroup() {
    this.groupService.getGroup(this._id).subscribe(group => {
      this.group = group;
      this.model = {name: this.group.name, description: this.group.description, campus: this.group.campus, tags: this.group.tags }
      console.log(this.model);
    });
  }

  editGroup() {
      this.groupService.editGroup(this.model.name, this.model.description, this.model.campus, this.model.tags,this._id).subscribe(result => {
      if (result === true) {
          this.router.navigate(['/']);
      } else {
          this.error = 'invalid edit';
      }
   });
   }
}
