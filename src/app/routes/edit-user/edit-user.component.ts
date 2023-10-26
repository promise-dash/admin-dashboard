import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  myForm: FormGroup;
  userData: Array<any> = [];

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private activeRoute: ActivatedRoute) {

    this.userData = userService.userList;

    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

  }
  
  saveChanges() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      const userId = this.activeRoute.snapshot.params['id'];
      this.userService.edituser(this.myForm.value, Number(userId));
      this.myForm.reset();
      this.router.navigate(['/users']);
    }
  }

}
