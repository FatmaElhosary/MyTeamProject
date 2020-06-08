import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userlogin = new UserLogin(1, '', '');
  constructor() {}
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  login() {
    this.userlogin = new UserLogin(
      1,
      this.userlogin.name,
      this.userlogin.password
    );
  }
  ngOnInit(): void {}
  // TODO: Remove this when we're done
  //get userlogin data
  //get diagnostic() { return JSON.stringify(this.userlogin); }
}
