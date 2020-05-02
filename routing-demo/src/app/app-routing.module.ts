import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './components/department-overview/department-overview.component';
import { DepartmentContactComponent } from './components/department-contact/department-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },//default route
  { path: 'departments', component: DepartmentListComponent },
  
  { path: 'departments/:id', component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent},
      { path: 'contact', component: DepartmentContactComponent}
    ]
   },
  { path: 'employees',   component: EmployeeListComponent },
  { path: '**',   component: PageNotFoundComponent }//if there is no peticular path this will route.this should always be in the last
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
