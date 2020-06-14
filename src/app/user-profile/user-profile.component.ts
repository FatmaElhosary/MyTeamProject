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
/////////////
//user information form
userInformationForm =this._FormBuilder.group({
  'name': [null, [Validators.required,Validators.minLength(3)]],
   'email':[null,[Validators.required,Validators.email]],

  });


/////////////////////  
 
 
  changeInfo(){
  console.warn(this.userInformationForm.value);
 
  }
  updateProfile() {
   // this.changePasswordForm.get('name').setValue('fatma')
     /* this.userInformationForm.patchValue({
      name: 'fatma',
    });  */
  // this.myForm.get('resetPassword').errors
  }

  ngOnInit(): void {}
}
