import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() deviceXs:boolean;
  @Input() deviceMd:boolean;
  @Input() deviceLg:boolean;
  @Input() deviceSm:boolean;

  title: string;
  subtitle: string;


  constructor() { }

  ngOnInit(): void {
    this.title = "Lekarz Rodzinny.blog"
    this.subtitle = "zdrowie okiem lekarza. od początku. do końca."
  }

}
