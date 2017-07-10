import { Component, Input, OnInit } from '@angular/core';
import { User } from './user';

@Component({
	selector: 'users-list',
	templateUrl: './users.html';
})

export class UsersComponent {
 	@Input()
 	users: User[] = [];
 	
 	ngOnInit(): void {
 		console.log('--> users:', this.users);
 	}
}