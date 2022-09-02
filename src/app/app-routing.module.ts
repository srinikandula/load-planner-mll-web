import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
// import { BACKEND_LAYOUT } from './routes/backend-layout-routes';
// import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
// import { DEFAULT_ROUTES } from './routes/default-layout-routes';
import {AuthGuard} from "./_helpers/auth.guard";
import {LoginComponent} from "./main/auth/login/login.component";
import {SignupComponent} from "./main/auth/signup/signup.component";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/layout/layout.module').then(m => m.LayoutModule)
  },
  // { path: '', component: DefaultLayoutComponent, children: DEFAULT_ROUTES },
  // { path: 'backend', component: BackendLayoutComponent, children: BACKEND_LAYOUT },
  {path: 'logIn', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
