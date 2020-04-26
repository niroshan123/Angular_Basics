import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  routes=[
    {linkName:'Contact',url: 'contact'},
    {linkName:'Profile',url: 'profile'},
   
    
      ];

  constructor() { }

  ngOnInit() {
  }

}
