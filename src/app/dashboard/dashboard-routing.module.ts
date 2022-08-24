import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatesapComponent } from './createsap/createsap.component';
import { SAPmasterComponent } from './sapmaster/sapmaster.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'createsap', component: CreatesapComponent},
  { path: 'sapmaster', component: SAPmasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
