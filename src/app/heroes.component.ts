import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './HeroDetail/hero';
import { HeroService } from './HeroDetail/hero.service';

import { User } from './Users/user';

@Component({
  selector: 'my-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html',
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  
  selectedHero: Hero;
  heroes: Hero[]; 
  users: User[];
  onSelect(hero: Hero): void {
  	console.log("--> Inside onSelect func");
	  this.selectedHero = hero;
  }
  
  getHeroes(): void {
  	this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit(): void {
  	this.getHeroes();
  	this.users = [{ id: 1, lastName: 'Parekh', firstName: 'Jigneshkumar'}];
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  constructor(private heroService: HeroService, private router: Router) { }
}
