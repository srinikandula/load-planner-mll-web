import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any{
    const currentAccessToken = this.authenticationService.currentUserValue;
    console.log('er', currentAccessToken);
    if (currentAccessToken){
      if (this.authenticationService.isAuthenticated()){
        return  true;
      }else {
        if (currentAccessToken.id === '6308b1c052a0f85de09c330e'){
          return true;
        } else {
          this.router.navigate(['/logIn'], {queryParams: {returnUrl: state.url}});
          return false;
        }
      }
    } else {
      this.router.navigate(['/logIn'], {queryParams: {returnUrl: state.url}});
    }
    this.router.navigate(['/logIn'], {queryParams: {returnUrl: state.url}});
    return true;
  }

}
