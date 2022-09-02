import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class SecureGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    const currentAccessToken = this.authenticationService.currentUserValue
    if (currentAccessToken) {
      if (this.authenticationService.isAuthenticated()) {
        console.log(1)
        this.router.navigate(['/']);
        return true
      }
      // else {
      //   console.log(2)
      //   this.router.navigate(['/logIn'], {queryParams: {returnUrl: state.url}});
      //   return false;
      // }
    }
    // this.router.navigate(['/logIn'], {queryParams: {returnUrl: state.url}});
    return true;
  }

}
