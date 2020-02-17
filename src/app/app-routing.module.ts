import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{IncidentListComponent} from './incident-list/incident-list.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { SafetyRemediationsDetailsComponent } from './safety-remediations-details/safety-remediations-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'',redirectTo:'incidents/myincidents',pathMatch:'full'},
  {path:'incidents/incidentdetails/:id', component: IncidentDetailsComponent},
  {path:'safetyremediations/safetyremediationsdetails/:id', component: SafetyRemediationsDetailsComponent},
  {path: 'incidents/:routename',component: IncidentListComponent},
  {path:'safetyremediations/:routename', component: IncidentListComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
