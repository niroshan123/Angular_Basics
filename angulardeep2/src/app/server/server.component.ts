import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverName = '';
  serverCreation = 'server is down';
  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }
  myFunction() {
     this.serverCreation = 'Server is up' + this.serverName;
  }

}
