import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {

  public students=[];
  public errorMsg2;
  constructor(private _studentService:StudentService) {

   }

  ngOnInit() {

    this._studentService.getStudents().subscribe(data=>this.students=data,error=>this.errorMsg2=error)
  }

}
