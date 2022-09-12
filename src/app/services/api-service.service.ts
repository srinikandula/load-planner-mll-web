import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUrls} from "../schemas/apiUrls";
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public fileName: any;

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

  exportExcel(tableId: string, xlfileName: string, col1: any, col2: any): void {
    const element = document.getElementById(tableId);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element, {raw: true});
    ws['!cols'] = [];
    ws['!cols'][col1] = {hidden: true};
    ws['!cols'][col2] = {hidden: true};
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName + '' + xlfileName + '.xlsx');
  }

}
