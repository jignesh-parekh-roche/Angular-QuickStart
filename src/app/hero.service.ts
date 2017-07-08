import { Injectable } from '@angular/core';

import { Hero } from './hero';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		console.log('--> Inside HeroService > getHeroes', HEROES);
		return Promise.resolve(HEROES);
	}	
}