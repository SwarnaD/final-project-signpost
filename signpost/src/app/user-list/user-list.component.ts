import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any = []

  constructor(private userListService: UserListService) { }

  ngOnInit() {
    this.userListService.getAllUsers().subscribe(users => {
      this.users = users
    });
  }

}
