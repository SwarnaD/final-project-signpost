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
      private route: ActivatedRoute,
      private groupService: GroupService) {
        }

  ngOnInit() {
      this.route.params.subscribe(params => {
            this._id = params['id'];
      });
            this.getGroup();
	    console.log(this.group);
            this.model ={name: this.group.name ,description: this.group.description ,campus: this.group.campus,tags: this.group.tags }



  }
  getGroup() {
  	console.log(this._id);
    this.groupService.getGroup(this._id).subscribe(group => {
      this.group = group;
    });
  }
  /*editGroup() {
      this.groupService.editGroup(this._id, this.model.name, this.model.description, this.model.campus, this.model.tags).subscribe(result => {
      if (result === true) {
          this.router.navigate([/]);
      } else {
          this.error = 'invalid edit';
      }
   });
   }*/
}
