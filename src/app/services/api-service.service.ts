import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUrls} from "../schemas/apiUrls";
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _httpClient: HttpClient, public _apiUrls: ApiUrls,) { }

  getAll(subUrl: any, data: any){
    return this._httpClient.post(this._apiUrls.mainUrl+subUrl, data);
  }

  get(subUrl: any) {
    return this._httpClient.get(this._apiUrls.mainUrl + subUrl);
  }

  downloadTemplateFile(): Observable<any> {
    return this._httpClient.get('http://localhost:3000/api/v1/orders/template');
  }


  create(subUrl: any, data: any) {
    return this._httpClient.post(this._apiUrls.mainUrl + subUrl, data).pipe(map((res: any) => {
      return res;
    }));
  }

  upload(subUrl: any, data: File) {
    const formData: FormData = new FormData();
    formData.append('uploadCsv', data);
    return this._httpClient.post(this._apiUrls.mainUrl + subUrl, formData, {
      reportProgress: true,
      observe: "events"
    });
  }

  uploadFile(subUrl: any, data: File) {
    const formData: FormData = new FormData();
    formData.append('uploadCsv', data);
    return this._httpClient.post('', formData, {
      reportProgress: true,
      observe: "events"
    });
  }
}
