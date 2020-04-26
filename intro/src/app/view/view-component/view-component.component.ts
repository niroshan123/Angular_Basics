import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  userName : string="";
  Response:any;
  constructor(private http:HttpClient)//4 api call eka ganna
   {

    }

  ngOnInit() {
  }
//button click eka
  gitHub(){
    let obs=this.http.get('http://api.github.com/users/'+ this.userName)
    obs.subscribe((Response)=>{
      this.Response=Response;
    })
  }

}
