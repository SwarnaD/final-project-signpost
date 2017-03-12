import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

import { UserListService } from './user-list.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// this is a very ghetto way to do this, sorry
var ROUTES = [
  {
    path: '',
    component: UserListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
