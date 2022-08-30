import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUrls} from "../schemas/apiUrls";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _httpClient: HttpClient, public _apiUrls: ApiUrls,) { }

  getAll(subUrl: any, data: any){
    return this._httpClient.post(this._apiUrls.mainUrl+subUrl, data);
  }

  create(subUrl: any, data: any) {
    return this._httpClient.post(this._apiUrls.mainUrl + subUrl, data).pipe(map((res: any) => {
      return res;
    }));
  }
}
