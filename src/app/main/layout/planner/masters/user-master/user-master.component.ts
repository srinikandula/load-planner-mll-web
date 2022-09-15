import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiUrls} from "../../../../../schemas/apiUrls";
import {AuthenticationService} from "../../../../../services/authentication.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ModalManager} from "ngb-modal";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DatePipe} from "@angular/common";
import {ApiServiceService} from "../../../../../services/api-service.service";
import {OnlynumberDirective} from "../../../../../directives/onlynumber.directive";

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss']
})
export class UserMasterComponent implements OnInit {
  @Input() tab: any;
  public userList: Array<any> = [];
  public totalCount: any;
  public usersCount: any= {};
  public pendingData: any = {
    page: 1,
    count: 10,
    pageSizes: []
  };

  public activeData: any = {
    page: 1,
    count: 10,
  };
  public status: string;
  public size: any;
  constructor(private _httpClient: HttpClient,
              public _apiUrls: ApiUrls,
              private _authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private modelService: ModalManager,
              private ngModalService: NgbModal,
              private datePipe: DatePipe,
              private _apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.status = 'pending';
    if (this.status ==='pending'){
      this.getUsers(this.status);
    }
  }

  changeActivePage($event: number) {
    this.pendingData.page = $event;
  }

  getUsers(status: string) {
    this.status = status;
    if (status === 'pending') {
      var apiUrl = this._apiUrls.pendingUsers;
    }else{
      var apiUrl = this._apiUrls.activateUsers;
    }
    this._apiService.getAll(apiUrl, this.pendingData).subscribe((res: any) => {
      if (res){
        this.userList = res.data;
        this.usersCount = res;
        OnlynumberDirective.pagination(res.total, this.pendingData);
      }
    });

  }

  handlePageSizeChange(size: any) {
    this.pendingData.count = size;
    console.log('ty', this.pendingData.count, size);
    this.pendingData.page = 1;
  }
}
