import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-templetes',
  templateUrl: './user-templetes.component.html',
  styleUrls: ['./user-templetes.component.scss'],
})
export class UserTempletesComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  constructor() {}

  ngOnInit(): void {}
}
