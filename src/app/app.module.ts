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
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule
      RouterModule.forRoot([
  	  	{
    		path: 'heroes',
    		component: HeroesComponent
  	  	},
  	  	{
  	  		path: 'dashboard',
  	  		component: DashboardComponent
  	  	},
  	  	{
  			path: '',
  			redirectTo: '/dashboard',
  			pathMatch: 'full'
		},
		{
  			path: 'detail/:id',
  			component: HeroDetailComponent
		}
  	  ])
   ],
  declarations: [
    // Any new module / component should be declared here
    AppComponent,
    HeroDetailComponent,
    LoginComponent,
    UsersComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
