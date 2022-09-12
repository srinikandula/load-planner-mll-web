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
import {NgbActiveModal, NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngb-modal";


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
    FormsModule,
    ModalModule,
    NgbModule,
  ],
  exports: [],
  providers: [
    NgbActiveModal,
  ],
})
export class PlannerModule { }
