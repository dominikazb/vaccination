import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-start',
  templateUrl: './app-start.component.html',
  styleUrls: ['./app-start.component.css']
})
export class AppStartComponent implements OnInit {

  defaultElevation = 2;
  raisedElevation = 8;

  isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  navigateToOrderEbookPost() {
    window.open(
      'https://lekarzrodzinny.blog/',
      '_blank'
    );
    // window.location.href = 'https://lekarzrodzinny.blog/';
  }


}
