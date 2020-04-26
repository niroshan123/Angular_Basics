import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

// message: String="hello";
// today : String =new Date().toDateString();

dateMessage : String;
somenumber: number=10;
  constructor() {

    setInterval(() => {         //replaced function() by ()=>

      let currentDate=new Date();
      this.dateMessage = currentDate.toDateString()+' '+ currentDate.toLocaleTimeString();
      console.log(this.dateMessage); // just testing if it is working
    }, 1000);


   }

  ngOnInit() {
    

  }

  addTwoNumbers(a:number,b:number){
    return a+b;
  }

}
