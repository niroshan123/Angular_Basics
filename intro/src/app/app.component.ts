import { Component } from '@angular/core';
import { User } from './adress-card/user.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  routes=[
{linkName:'Home',url: 'home'},
{linkName:'Settings',url: 'settings'},
{linkName:'Address-card',url: 'address-card'},
{linkName:'Date',url:'date'}

  ];


// user: User;
//  inputText:string="Initial value";

constructor(private svc: TestService,private http:HttpClient){
  // this.svc.printToConsole("Got the service");
  // this.user =new User();
  // this.user.name="Niroshan Ratnayake";
  // this.user.designation="Software Engineer";
  // this.user.address="100, Babila Naula";
  // this.user.phone=['0770062033','0662246236'];
}
ngOnInit() {
    // let obs=this.http.get('http://api.github.com/users/koushikkothagal');
    // obs.subscribe((Response)=>console.log(Response))
}


}
