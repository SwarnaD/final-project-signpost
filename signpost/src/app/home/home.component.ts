import { Component, OnInit } from '@angular/core';

import { UserService } from '../_services/user.service'
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: String;
  currentUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('userSession'));
    this.name = this.currentUser.name;
  }

}
