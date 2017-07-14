import { Component, Input, OnInit } from '@angular/core';
import { User } from './user';

import { UserListService } from './user-list.service';

@Component({
	selector: 'users-list',
	templateUrl: './users.html',
	providers:[UserListService]
})

export class UsersComponent {
 	users: User[] = [];
 	
 	constructor(private userListService: UserListService){}

 	ngOnInit(): void {
 		console.log('--> users:', this.users);

 		this.userListService.getUsers().subscribe(users => {
 			console.log('--> Inside the user.component > ngOnInit() > getUsers() call', users);
 			this.users = users;
 		});
 	}
}