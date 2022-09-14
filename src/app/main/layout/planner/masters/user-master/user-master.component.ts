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

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss']
})
export class UserMasterComponent implements OnInit {
  @Input() tab: any;
  public usersList: Array<any> = [];
  public activeUsersList: Array<any> = [];
  public pendingUsersList: Array<any> = [];
  public totalCount: any;
  public activeUsersTotalCount: any;
  public pendingUsersTotalCount: any;
  public pendingData: any = {
    page: 1,
    count: 10,
  };

  public activeData: any = {
    page: 1,
    count: 10,
  };
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
    console.log('tab', this.tab);
    this.tab =1;
    // this.pendingUsers();
    if (this.tab === 1){
      this.pendingUsers();
    } else if (this.tab === 2){
      // this.activeUsers();
    }
  }

  activeUsers(): void{
    this._apiService.getAll(this._apiUrls.activateUsers, this.activeData).subscribe((res: any) => {
      if (res){
        this.activeUsersList = res.data;
        this.activeUsersTotalCount = res;
      }
    });
  }

  pendingUsers(): void{
    this._apiService.getAll(this._apiUrls.pendingUsers, this.pendingData).subscribe((res: any) => {
      if (res){
        this.pendingUsersList = res.data;
        this.pendingUsersTotalCount = res;
      }
    });
  }

  changePendingPage($event: number) {
    this.pendingData.page = $event;
    this.pendingUsers();
  }

  changeActivePage($event: number) {
    this.activeData.page = $event;
    this.activeUsers();
  }
}
