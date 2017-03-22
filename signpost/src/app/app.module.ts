import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthGuard } from './_guards/auth.guard';

import { AuthService } from './_services/auth.service';
import { GroupService } from './_services/group.service';
import { EventService } from './_services/event.service';
import { UserService } from './_services/user.service';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { RegisterComponent } from './register/register.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { GroupComponent } from './group/group.component';
import { EventComponent } from './event/event.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { EditEventComponent } from './edit-event/edit-event.component';

// this is a very ghetto way to do this, sorry
const ROUTES = [
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
  },
  {
    path: 'creategroup',
    component: CreateGroupComponent
  },
  {
    path: 'createevent/:id',
    component: CreateEventComponent
  },
  {
    path: 'group/:id',
    component: GroupComponent
  },
  {
    path: 'event/:id',
    component: EventComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FeedComponent,
    RegisterComponent,
    CreateGroupComponent,
    CreateEventComponent,
    GroupComponent,
    EventComponent,
    EditGroupComponent,
    EditEventComponent
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
    EventService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
