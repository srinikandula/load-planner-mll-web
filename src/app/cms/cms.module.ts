import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent
  ],
  exports: [
    MatButtonModule
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
