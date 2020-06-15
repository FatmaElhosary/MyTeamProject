import { Component, OnInit } from '@angular/core';
class UserTempletes{
name:string;
id:number;
}
@Component({
  selector: 'app-user-templetes',
  templateUrl: './user-templetes.component.html',
  styleUrls: ['./user-templetes.component.scss'],
})
export class UserTempletesComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  constructor() {}
  userTempletes:Array<UserTempletes>=[];
 
 
  setTempletesvalues(){
   let templete:UserTempletes=new UserTempletes();
 templete.name="blog";
 templete.id=1;
 this.userTempletes.push(templete);
  }
  ngOnInit(): void {
    this.setTempletesvalues();

  }
}
