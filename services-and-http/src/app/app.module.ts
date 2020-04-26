import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import {HttpClientModule} from '@angular/common/http';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';
import { StudentService } from './services/student.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    StudentsDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
