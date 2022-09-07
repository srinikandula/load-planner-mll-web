import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannerRoutingModule } from './planner-routing.module';
import {PlannerComponent} from "./planner.component";
import { UploadFileComponent } from './upload-file/upload-file.component';
import { OrderDataComponent } from './order-data/order-data.component';
import { PlannedTripsComponent } from './planned-trips/planned-trips.component';
import { UnplannedTripsComponent } from './unplanned-trips/unplanned-trips.component';
import { ngfModule, ngf } from "angular-file"
import {AppModule} from "../../../app.module";
import {DragDropDirective} from "../../../directives/drag-drop.directive";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    PlannerComponent,
    UploadFileComponent,
    OrderDataComponent,
    PlannedTripsComponent,
    UnplannedTripsComponent,
    DragDropDirective
  ],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    ngfModule,
    NgbPaginationModule,
  ],
  exports: []
})
export class PlannerModule { }
