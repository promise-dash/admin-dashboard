import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(public userService: UserService, private router: Router){
  }

  handleEdit(id: number){
    this.router.navigate(['/user/edit', id]);
  }
  
  deleteUser(id: number){
    console.log(id);
    this.userService.deletUser(id);
  }
  

}
