import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ApiUrls } from '../schemas/apiUrls';
import {AbstractControl} from "@angular/forms";
import {BehaviorSubject,Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private _httpClient: HttpClient, private _apiUrls: ApiUrls) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public isAuthenticated(): string {
    // @ts-ignore
    return localStorage.getItem('currentUser');
  }


  logIn(username: string, password: string): any{
    return this._httpClient.post<any>(this._apiUrls.mainUrl+ 'api/v1/auth/login', {username, password}).pipe(map(res=> {
      if (res){
        localStorage.setItem('currentUser', JSON.stringify(res));
        this.currentUserSubject.next(res);
      }
      return res;
    }));
  }

  logOut(): any {
    // @ts-ignore
    localStorage.clear('currentUser');
    this.currentUserSubject.next(null);
  }
}
