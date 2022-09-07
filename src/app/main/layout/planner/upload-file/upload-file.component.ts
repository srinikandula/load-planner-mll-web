import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpEventType,} from "@angular/common/http";
import {ApiUrls} from "../../../../schemas/apiUrls";
import {AuthenticationService} from "../../../../services/authentication.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiServiceService} from "../../../../services/api-service.service";
import { map, catchError } from "rxjs/operators";
import Swal from "sweetalert2";
import {FileHandle} from "../../../../directives/drag-drop.directive";
// import {FileHandle}  from '../../../../directives/drag-drop.directive';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  @Input() tab: any;
  xlsxFile: any;
  // public progress: number;
  public progress: number = 0;
  public file: any;

  filesSet: FileHandle[] = [];
  public fileName: any;

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
    this.file = ''
    if (xlsxFile[0].url) {
      this.file = xlsxFile[0].file;
      this.fileName = this.file.name;
      console.log('w', this.file);
    } else {
      this.file = xlsxFile[0]
      this.fileName = xlsxFile[0].name;
    }
  }

  confirmUploadFile(): void {
   // this.file = [];
    if (!this.file) {
      Swal.fire('Error', 'Please select csv files Only', 'error');
    } else{
      this._apiService.upload(this._apiUrls.uploadCsv, this.file).subscribe((event: any) => {
        console.log('d', event);
        if (event){
          if (event.type == HttpEventType.UploadProgress) {
            console.log('ee', event);
            this.progress = Math.round((100 / event.total) * event.loaded);
            // console.log('rt', this.progress);
            setTimeout(() => {
              // this.progress = 0;
            }, 1000);
          } else if (event.type == HttpEventType.Response) {
            // this.progress = 0;
          }
        }
        // this.file = [];
      }, error => {
        alert(error);
      })
    }
  }

  filesDropped(filesSet: FileHandle[]): void {
    this.filesSet = filesSet;

    console.log(this.filesSet, '====> drop and drop');
  }

  downloadTemplate() {
    this._apiService.downloadTemplateFile().subscribe((res: any) => {
      console.log(res)
      if (res && !res.error) {
        window.location.href = res.file;
      }
    }, error => {
      console.log(error);
    })
  }


}
