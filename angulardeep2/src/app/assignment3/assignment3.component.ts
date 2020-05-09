import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

buttonStatus1 = false ;

  logs: number[ ] = [ ];
  constructor() { }

  ngOnInit() {
  }
  buttonToggle() {
    this.buttonStatus1 = !this.buttonStatus1;
    // @ts-ignore
    this.logs.push(new Date());
    // @ts-ignore
    // this.logs.push(this.logs.length + 1);
  }

}
