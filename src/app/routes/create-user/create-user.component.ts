import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  myForm: FormGroup;
  userData: Array<any> = [];

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {

    this.userData = userService.userList;

    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
   }

  onSubmit() {
    if (this.myForm.valid) {
      const newUser = { ...this.myForm.value, id: this.generateNewId() };
      this.userService.addUser(newUser);
      this.myForm.reset();
      this.router.navigate(['/users']);
    }
  }
  generateNewId(): number {
    let id = 1;
    if (this.userService.userList.length > 0) {
      id = Math.max(...this.userService.userList.map(user => user.id)) + 1;
    }
    return id;
  }

}
