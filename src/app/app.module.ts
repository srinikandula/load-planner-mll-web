import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
// import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './main/auth/login/login.component';
import { CorosVideoComponent } from './main/coros-video/coros-video.component';
import { SignupComponent } from './main/auth/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CommonModule, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {JwtInterceptor} from "./interceptors/jwt.interceptor";
import { DragDropDirective } from './directives/drag-drop.directive';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CorosVideoComponent,
    // DefaultLayoutComponent,
    // BackendLayoutComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
