import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  Validator
} from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(_Router: Router, private _FormBuilder: FormBuilder) {
    let token = localStorage.getItem('token');
    //user not loged in
    if (token == null) {
      _Router.navigateByUrl('/login');
    }
  }
  //slidebar
  events: string[] = [];
  opened: boolean;
  ////////////////////////////
  
  changePasswordForm = this._FormBuilder.group({
    currentpassword: [
      '',
      Validators.required,
      Validators.pattern(/^[A-Z][0-9]{2,8}$/),
    ],
    name: ['', Validators.required, Validators.minLength(3)],
    email: ['', Validators.required, Validators.email],
    newPassword: [
      '',
      Validators.required,
      Validators.pattern(/^[A-Z][0-9]{2,8}$/),
    ],
    confirmpassword: [
      '',
      Validators.required,
      Validators.pattern(/^[A-Z][0-9]{2,8}$/),
      
    ],
  });

  changepass() {
    //waiting for API
   // console.warn(this.changePasswordForm.value);
  }

  updateProfile() {
   // this.changePasswordForm.get('name').setValue('fatma')
   /*  this.changePasswordForm.patchValue({
      name: 'fatma',
    }); */
  }

  ngOnInit(): void {}
}
