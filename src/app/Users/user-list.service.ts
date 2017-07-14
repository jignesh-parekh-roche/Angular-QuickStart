import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserListService {

	constructor(private http: Http){}

	private users: User[];

	getUsers(): Observable<User[]> {
		console.log('--> Inside getUsers');

		return this.http.get('api/users')
			.map(response => response.json().data as User[]);

		// this.http.get('/assets/data/user-list.json')
		// 	.map(res => res.json().data as User[])
		// 	.subscribe(users => {
		// 		console.log('--> Inside getUsers() > loading data from JSON file.', users);
		// 	});
	}
}
