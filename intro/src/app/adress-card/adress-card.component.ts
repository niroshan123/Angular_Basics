import { Component, OnInit, Input } from '@angular/core';
import {User} from './user.model';
import { TestService } from '../test.service';


@Component({
  selector: 'app-adress-card',
  templateUrl: './adress-card.component.html',
  styleUrls: ['./adress-card.component.css']
})
export class AdressCardComponent implements OnInit {

@Input('user') user: User;
isCollapsed :boolean =true;
constructor(private svc: TestService){
  this.svc.printToConsole("Got the service");
  this.user =new User();
  this.user.name="Niroshan Ratnayake";
  this.user.designation="Software Engineer";
  this.user.address="100, Babila Naula";
  this.user.phone=['0770062033','0662246236'];
}
toggleCollapse(){
  this.isCollapsed=!this.isCollapsed;
}
  ngOnInit() {
  
  }

}
