import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{IncidentListComponent} from './incident-list/incident-list.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/myincidents',pathMatch:'full'},
  {path:'myincidents', component:IncidentListComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
