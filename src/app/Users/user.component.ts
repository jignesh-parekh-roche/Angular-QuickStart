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
 			console.log('--> List of users: ', users);
 			this.users = users;
 		});


 		this.userListService.getEvenNumbers().subscribe(number => {
 			console.log(`--> Even number: ${number}`);
 		});

 		this.userListService.getUserByFirstname('Jignesh').subscribe(user => {
 			console.log('--> User found by Firstname:', user);
 		});

 		this.userListService.getUserByLastname('Parekh').subscribe(user => {
 			console.log('--> User found by Lastname:', user);
 		});

 		this.userListService.getUsersByAge(30).subscribe(users => {
 			console.log('--> Inside getUsersByAge > return values:', users);
 		});
 	}
}