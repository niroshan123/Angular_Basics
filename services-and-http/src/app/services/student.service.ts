import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IStudent } from '../models/student';
import { throwError,Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
//another way of using service 
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _url:string="./assets/data/students.json";

  constructor(private http:HttpClient) { }

  getStudents():Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this._url).pipe(catchError(this.errorHander1));
  
  }
  errorHander1(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
