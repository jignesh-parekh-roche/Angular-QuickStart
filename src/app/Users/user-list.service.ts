import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/concatMapTo';
import 'rxjs/add/operator/concatAll';

import 'rxjs/add/observable/from';


import { User } from './user';

@Injectable()
export class UserListService {

	constructor(private http: Http){}

	private users: User[];

	getUsers(): Observable<User[]> {
		return this.http.get('api/users')
			.map(response => response.json().data as User[]);

		// this.http.get('/assets/data/user-list.json')
		// 	.map(res => res.json().data as User[])
		// 	.subscribe(users => {
		// 		console.log('--> Inside getUsers() > loading data from JSON file.', users);
		// 	});
	}

	getEvenNumbers(): Observable<number> {
		return Observable.of(1, 2, 3, 4)
				.map(x => x + 1)
				.filter(x => (x % 2) === 0);
	}

	getUserByFirstname(firstName: string): Observable<User>{
		return this.http.get('api/users')
				.map(response => response.json().data as User[])
				.concatMap(array => Observable.from(array))
				.filter(user => user.firstName.startsWith(firstName));
	}

	getUserByLastname(lastName: string): Observable<User>{
		return this.http.get('api/users')
				.map(response => response.json().data as User[])
				.concatMap(array => Observable.from(array))
				.filter(user => user.lastName.startsWith(lastName));
	}

	getUsersByAge(age: number): Observable<User[]>{
		return this.http.get('api/users')
				.map(response => response.json().data
									.filter((user:User) => user.age > age) as User[]);	
	}
}
