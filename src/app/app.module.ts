import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { HeroDetailComponent } from './HeroDetail/hero-detail.component';

import { AppComponent }  from './app.component';

import { LoginComponent } from './login/login.component';

import { UsersComponent } from './Users/user.component';

import { HeroesComponent } from './heroes.component';

import { HeroService } from './HeroDetail/hero.service';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule
      RouterModule.forRoot([
  	  	{
    		path: 'heroes',
    		component: HeroesComponent
  	  	}
  	  ])
   ],
  declarations: [
    // Any new module / component should be declared here
    AppComponent,
    HeroDetailComponent,
    LoginComponent,
    UsersComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
