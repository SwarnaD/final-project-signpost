import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/group';
@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  model: User = { name: '', description: '', campus: ''}
  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }
  createGroup(){
    this.groupService.addGroup(this.model.name, this.model.campus, this.model.description).subscribe(result => {
      if (result === true) {
        this.router.navigate(['/']);
      } else {
        this.error = 'invalid group';
      }
    });

  }

}
