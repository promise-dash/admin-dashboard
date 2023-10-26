import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Muller',
      email: 'john@email.com'
    },
    {
      id: 2,
      firstName: 'Kyle',
      lastName: 'Bulmer',
      email: 'kyle@email.com'
    },
    {
      id: 3,
      firstName: 'Mike',
      lastName: 'Evans',
      email: 'mike@email.com'
    },
    {
      id: 4,
      firstName: 'Kevin',
      lastName: 'Eleven',
      email: 'kevin@email.com'
    },
  ];

  addUser(user: any){
    this.userList.push(user);
  }

  edituser(user: any, id: number){
    const index = this.userList.findIndex(u => u.id === id);
    if (index !== -1) {
      this.userList[index].firstName = user.firstName;
      this.userList[index].lastName = user.lastName;
      this.userList[index].email = user.email;
    }
  }

  deletUser(id: number){
    const index = this.userList.findIndex(user => user.id === id);
    if (index !== -1) {
      this.userList.splice(index, 1);
    }
  }

  constructor() { }
}
