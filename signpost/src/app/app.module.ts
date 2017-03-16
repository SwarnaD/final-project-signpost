import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthGuard } from './_guards/auth.guard'

import { AuthService } from './_services/auth.service'
import { GroupService } from './_services/group.service'
import { UserService } from './_services/user.service'

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { RegisterComponent } from './register/register.component';

// this is a very ghetto way to do this, sorry
var ROUTES = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FeedComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthGuard,
    AuthService,
    GroupService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
