import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';

const routes: Routes = [
  { path: '', component: WarehouseListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectWarehouseRoutingModule { }
