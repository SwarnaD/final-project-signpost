import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../_services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  _id: String;
  group: any = [];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._id = params['id'];
    });
  }

  getGroup() {
    this.groupService.getGroup(this._id).subscribe(group => {
      this.group = group;
    });
  }

}
