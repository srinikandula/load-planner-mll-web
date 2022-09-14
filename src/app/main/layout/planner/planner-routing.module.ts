import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlannerComponent} from "./planner.component";
import {UserMasterComponent} from "./masters/user-master/user-master.component";

const routes: Routes = [{
  path: '',
  component: PlannerComponent,
},
  {
    path: 'users',
    component: UserMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannerRoutingModule { }
