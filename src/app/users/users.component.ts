import { Component } from '@angular/core';
import { USERS } from '../mock-users';
import { User } from '../user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

// USERS -- the list imported from another file
// users -- will be used in users template
// user - just a variable name here - nothing to do with that user(can be changed to a,b,c doesn't matter) in template

export class UsersComponent {
  
  users = USERS;
  selectedUser?: User;

  // here, the type of user is User
  onSelect(user:User): void{
    this.selectedUser = user;
  }
}
