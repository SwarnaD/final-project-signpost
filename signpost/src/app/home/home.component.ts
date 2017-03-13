import { Component, OnInit } from '@angular/core';

import { UserService } from '../_services/user.service'
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {  // not sure if this works (what is users?)
      this.users = users;
    });
  }

}
