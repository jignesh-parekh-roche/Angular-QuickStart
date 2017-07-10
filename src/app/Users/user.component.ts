import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
	selector: 'users-list',
	templateUrl: './users.html';
})

export class UsersComponent {
 	@Input()
 	users: User[] = [];
}