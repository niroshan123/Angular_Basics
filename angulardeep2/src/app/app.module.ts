import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import {RouterModule} from '@angular/router';
import { DangerComponent } from './danger/danger.component';
import { SuccessComponent } from './success/success.component';
import { DirectivesComponent } from './directives/directives.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DangerComponent,
    SuccessComponent,
    DirectivesComponent,
    Assignment3Component,
    Assignment4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'danger' , component : DangerComponent},
      {path: 'success' , component : SuccessComponent},
      {path: 'server' , component : ServerComponent},
      {path: 'directive' , component : DirectivesComponent},
      {path: 'assignment3' , component : Assignment3Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
