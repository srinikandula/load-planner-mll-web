import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

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
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {TimepickerModule} from "ngx-bootstrap/timepicker";
import {PopoverModule} from "ngx-bootstrap/popover";
import { UserMasterComponent } from './masters/user-master/user-master.component';
import { HeaderBarComponent } from './masters/header-bar/header-bar.component';

@NgModule({
  declarations: [
    PlannerComponent,
    UploadFileComponent,
    OrderDataComponent,
    PlannedTripsComponent,
    UnplannedTripsComponent,
    DragDropDirective,
    UserMasterComponent,
    HeaderBarComponent,
  ],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    ngfModule,
    NgbPaginationModule,
    FormsModule,
    ModalModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    PopoverModule,
  ],
  exports: [
    BsDatepickerModule
  ],
  providers: [
    DatePipe
  ],
})
export class PlannerModule { }
