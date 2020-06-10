import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(_Router:Router) {
    let token=localStorage.getItem('token');
    //user not loged in
    if(token==null){
    _Router.navigateByUrl('/login');
    }
   }

  ngOnInit(): void {
  }

}
