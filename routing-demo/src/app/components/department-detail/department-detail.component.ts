import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from '@angular/router'
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // let id=parseInt(this.route.snapshot.paramMap.get('id'));
    
    // this.departmentId=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id= parseInt(params.get('id'));
      this.departmentId=id;
    });
    
  }

  goPrev(){
      let preId = this.departmentId-1;
      this.router.navigate(['/departments',preId]);
  }

  goNext(){

    let nextId = this.departmentId+1;
    this.router.navigate(['/departments',nextId]);

    
  }

}
