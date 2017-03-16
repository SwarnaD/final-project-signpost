import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User = { name: '', email: '', password: ''};
  error = '';
  email: String = "asdf";

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.logout();  // currently will log the user out on init for testing
  }

  login() {
    this.authService.login(this.model.email, this.model.password).subscribe(result => {
      console.log(result);
      if (result === true) {
        this.router.navigate(['/']);
      } else {
        this.error = 'Email or password is incorrect';
      }
    });
  }

}
