import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import {RouterModule} from '@angular/router';
import { DangerComponent } from './danger/danger.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DangerComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'danger' , component : DangerComponent},
      {path: 'success' , component : SuccessComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
