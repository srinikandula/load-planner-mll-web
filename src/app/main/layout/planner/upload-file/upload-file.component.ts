import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiUrls} from "../../../../schemas/apiUrls";
import {AuthenticationService} from "../../../../services/authentication.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiServiceService} from "../../../../services/api-service.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  @Input() tab: any;
  xlsxFile: any;
  constructor(private _httpClient: HttpClient,
              public _apiUrls: ApiUrls,
              private _authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private _apiService: ApiServiceService) { }

  ngOnInit(): void {
  }

  uploadFile(xlsxFile: any): void {
    console.log(xlsxFile)
    if (!xlsxFile) {
      Swal.fire('Error', 'Please select XLSX files Only', 'error');
    } else{
      const file = xlsxFile[0];
      this._apiService.upload(this._apiUrls.uploadCsv, file).subscribe((res: any) => {
        Swal.fire('Success', 'XlSX File upload successfully..!', 'success');
      })
    }

  }

}
