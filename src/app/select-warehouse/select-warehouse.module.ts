import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectWarehouseRoutingModule } from './select-warehouse-routing.module';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    WarehouseListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    SelectWarehouseRoutingModule
  ]
})
export class SelectWarehouseModule { }
