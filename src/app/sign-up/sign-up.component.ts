import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  signupForm=new FormGroup({
    'first-name':new FormControl(null,[Validators.required,Validators.maxLength(8),Validators.minLength(3)]),
    'last-name':new FormControl(null,[Validators.required,Validators.maxLength(8),Validators.minLength(3)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][0-9]{2,8}$/)]),
    'repassword':new FormControl(null,[Validators.required,])




  })
  constructor() { }

  ngOnInit(): void {
  }


}
