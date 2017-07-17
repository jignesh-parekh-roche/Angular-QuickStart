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

  constructor(private heroService: HeroService, private router: Router) { }

  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  }
  
  getHeroes(): void {
  	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit(): void {
  	this.getHeroes();
  	this.users = [{ id: 1, lastName: 'Parekh', firstName: 'Jigneshkumar', age: 33}];
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if(this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  } 
}
