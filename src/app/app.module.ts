import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
      FormsModule,
      AppRoutingModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService)
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
