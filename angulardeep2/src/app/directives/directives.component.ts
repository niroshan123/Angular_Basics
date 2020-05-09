import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  status  = '';
  directiveStatus = false;
  servers = ['Test1', 'Test2', 'Test3'];
  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }
  directive() {
    this.directiveStatus = true ;
  }
  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }
  getUserStatus() {
    return this.status;
  }

}
