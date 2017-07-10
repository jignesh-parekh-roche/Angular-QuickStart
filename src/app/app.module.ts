import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail.component';

import { AppComponent }  from './app.component';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule
   ],
  declarations: [
    // Any new module / component should be declared here
    AppComponent,
    HeroDetailComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
