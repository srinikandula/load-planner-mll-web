import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiUrls} from "../../../../schemas/apiUrls";
import {AuthenticationService} from "../../../../services/authentication.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiServiceService} from "../../../../services/api-service.service";
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalManager} from "ngb-modal";
import {DatePipe} from "@angular/common";
import {OnlynumberDirective} from "../../../../directives/onlynumber.directive";

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  styleUrls: ['./order-data.component.scss']
})
export class OrderDataComponent implements OnInit {
  @Input() tab: any;
  public allOrdersList: Array<any> = [];
  public   orderData: any = {
    page: 1,
    count: 10,
    pageSizes: [],
    date: new Date(),
  };
  public totalCount: any= {
    page: 1,
    count: 10,
  };

  orderIdsSet: any = []
  public updated:any = {
    orderIds: this.orderIdsSet,
    vehicleType: '12',
    tripDate: '',
    tripTime: 'hh, mm',
  };

  // public truckListData: any []

  public selectData = false;
  @ViewChild('myModal') myModal: any;

  public selectAll: boolean;
  public selectAllIds= 'selectAll';
  public checkedData: any;
  public orderIds: any[];
  public unSelectAll: boolean;
  public unSelectData: boolean;
  public modalRef: any;
  public size = 10;
  public checkedCount: number;
  public checkedOrders: any = [];
  public meridian = true;
  constructor(private _httpClient: HttpClient,
              public _apiUrls: ApiUrls,
              private _authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private modelService: ModalManager,
              private ngModalService: NgbModal,
              private datePipe: DatePipe,
              private _apiService: ApiServiceService) {
    this.updated.tripTime =this.datePipe.transform((new Date), 'hh:mm a');

  }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(): void{
    this._apiService.getAll(this._apiUrls.getAllOrders, this.orderData).subscribe((res: any) => {
      if (res){
        this.allOrdersList = res.data;
        this.totalCount = res;
        OnlynumberDirective.pagination(res.total, this.orderData);
      }
    });
  }

  changePage(event: any) {
    this.orderData.page = event;
    this.getAllOrders();
  }

  toggleAll(select: string): void {
    this.checkedCount = 0;
    this.updated.orderIds = [];
    if (select === 'selectAll') {
      this.unSelectAll = true;
      this.selectAll = true;
      if (this.selectAll === true) {
        this.allOrdersList.map((data) => {
          data.checked = true;
          this.updated.orderIds.push(data._id);
          if (data['checked']){
            this.checkedCount = this.checkedCount + 1;
            this.checkedOrders.push(data.orderNo);
          }
        });
      } else {
        this.allOrdersList.map((data) => {
          data.checked = false;
        });
      }
    } else  if (select === 'unSelectAll') {
      this.unSelectAll = false;
      this.unSelectData = true;
      this.selectAll = false;
      this.getAllOrders();
    }


    if (this.selectAll === true) {
      this.allOrdersList.map((data) => {
        data.checked = true;
        this.updated.orderIds.push(data._id);
        this.unSelectData = false;
        console.log('s', data);
        if (data['checked']){
          this.checkedCount = this.checkedCount + 1;
          this.checkedOrders.push(data.orderNo);
          console.log('ui', this.checkedOrders);
        }
      });
    } else {
      this.allOrdersList.map((data) => {
        data.checked = false;
        this.unSelectData = true;
      });
    }

  }


  toggleDeviceIds(status:any, orders: any) {
    this.checkedData = status;
    console.log('d', this.checkedData);
    this.checkedCount = 0;

    this.allOrdersList.forEach((item:any) => {
      if (item['checked']){
        this.checkedCount = this.checkedCount + 1;
        this.checkedOrders.push(item.orderNo);
      }
    })

    this.unSelectData = false;
    if (this.allOrdersList.every(a => a.checked)) {
      this.updated.orderIds.push(orders._id);
      this.selectAll = true;
    } else if (status){
        this.updated.orderIds.push(orders._id);
    } else {
      this.selectAll = false;
      // @ts-ignore
      const eindex = this.updated.orderIds.indexOf(orders._id);
      if (eindex > -1) {
        this.updated.orderIds.splice(eindex, 1);
      }
    }
  }

  runPlanner(myModal: any): void {
    this.orderIds = this.updated.orderIds;
    this.ngModalService.open(myModal, {windowClass: 'rightModel', keyboard: false, animation: true, backdrop: "static"});
  }

  close(): void {
    this.ngModalService.dismissAll();
  }

  proceed(myModal: any): void {
    this._apiService.getAll(this._apiUrls.createOrder, this.updated).subscribe((res: any) => {
      if (res){
        this.ngModalService.open(myModal, {windowClass: 'modal-fullscreen'});
      }
    })
  }

  handlePageSizeChange(event: any) {
    this.orderData.count = parseInt(event);
    console.log('ty', this.orderData.count, event);
    this.orderData.page = 1;
    this.getAllOrders();
  }
}
