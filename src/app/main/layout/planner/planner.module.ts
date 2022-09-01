import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannerRoutingModule } from './planner-routing.module';
import {PlannerComponent} from "./planner.component";
import { UploadFileComponent } from './upload-file/upload-file.component';
import { OrderDataComponent } from './order-data/order-data.component';
import { PlannedTripsComponent } from './planned-trips/planned-trips.component';
import { UnplannedTripsComponent } from './unplanned-trips/unplanned-trips.component';


@NgModule({
  declarations: [
    PlannerComponent,
    UploadFileComponent,
    OrderDataComponent,
    PlannedTripsComponent,
    UnplannedTripsComponent
  ],
  imports: [
    CommonModule,
    PlannerRoutingModule
  ]
})
export class PlannerModule { }
