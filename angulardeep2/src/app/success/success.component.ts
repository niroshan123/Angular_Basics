import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
allowServer = false;
server = 'Server is creted';
serverName = ' ';
  serverName2 = ' Niroshan Ratnayake';
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  showServer() {
return this.server = 'server is not credtd' ;
  }

  onUpdateServerName($event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
