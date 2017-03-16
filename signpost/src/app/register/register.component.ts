import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: User= { name: '', email: '', password: ''};
  error = "";

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.logout();
  }

  register() {
    this.authService.register(this.model.name, this.model.email, this.model.password)
      .subscribe(result => {
        console.log(result);
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.error = 'Error creating user.'
        }
      })
  }

}
