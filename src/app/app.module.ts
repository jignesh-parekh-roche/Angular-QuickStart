import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './HeroDetail/hero-detail.component';

import { AppComponent }  from './app.component';

import { LoginComponent } from './login/login.component';

import { UsersComponent } from './Users/user.component';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule
   ],
  declarations: [
    // Any new module / component should be declared here
    AppComponent,
    HeroDetailComponent,
    LoginComponent,
    UsersComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
