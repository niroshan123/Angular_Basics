import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressCardComponent } from '../adress-card/adress-card.component';
import { DateComponent } from '../date/date.component';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { ViewComponentComponent } from '../view/view-component/view-component.component';
import { SettingsComponent } from '../settings/settings.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SettingsContactComponent } from '../settings-contact/settings-contact.component';
import { SettingsProfileComponent } from '../settings-profile/settings-profile.component';

const routes: Routes = [
  // 1_)direct to home without the user have to do nothing
  {path:'',redirectTo:'/home',pathMatch:'full'},
 // {path:'', component:HelloWorldComponent},//not recomented for 1
  { path: 'address-card', component: AdressCardComponent },
  { path: 'home', component: HelloWorldComponent },
  { path: 'date', component: DateComponent },
  { path: 'view', component: ViewComponentComponent },
  { path: 'settings', component: SettingsComponent,
     children:[
       {path:'',redirectTo:'profile',pathMatch:'full'},//optional
       {path:'profile',component: SettingsContactComponent},//settings/
       {path:'contact',component: SettingsProfileComponent},
//dan settings walin link wenwanm profile ekta eka setttings wala child route ekak widiyata dannna oni meheme
//and eka setting eka router out let tag eka danna oni<router-outlet></router-outlet>
      {path:'**',redirectTo:'profile',pathMatch:'full'}//waradi ekek gahuwaoth profile eketama route karanwa

     ]
  },


// 2_)if the user enters a wrong /url the the tell the user that the route doesnt exixts
{path:'**',component:PageNotFoundComponent}//waradi ekek gahuwaoth page not found kiyla denwa

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }