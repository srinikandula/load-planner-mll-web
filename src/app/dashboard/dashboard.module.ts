import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreatesapComponent } from './createsap/createsap.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SAPmasterComponent } from './sapmaster/sapmaster.component';




@NgModule({
  declarations: [
    DashboardComponent,
    CreatesapComponent,
    SAPmasterComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDatepickerModule,  
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
