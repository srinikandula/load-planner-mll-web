import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiUrls} from "../../../../schemas/apiUrls";
import {AuthenticationService} from "../../../../services/authentication.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiServiceService} from "../../../../services/api-service.service";
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalManager} from "ngb-modal";

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  styleUrls: ['./order-data.component.scss']
})
export class OrderDataComponent implements OnInit {
  @Input() tab: any;
  public allOrdersList: Array<any> = [];
  public orderData: any = {
    page: 1,
    size: 10,
    count: 5,
    pageSizes: [],
  };
  public totalCount: any= {
    page: 1,
    count: 5,
  };

  orderIdsSet: any = []
  public updated = {
    orderIds: this.orderIdsSet,
  };

  public selectData = false;
  @ViewChild('myModal') myModal: any;

  public selectAll: boolean;
  public selectAllIds= 'selectAll';
  public checkedData: any;
  public orderIds: any[];
  public unSelectAll: boolean;
  public unSelectData: boolean;
  public modalRef: any;
  constructor(private _httpClient: HttpClient,
              public _apiUrls: ApiUrls,
              private _authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private modelService: ModalManager,
              private ngModalService: NgbModal,
              public  activeModal: NgbActiveModal,
              private _apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(): void{
    this._apiService.get(this._apiUrls.getAllOrders + '?page=' + this.totalCount.page).subscribe((res: any) => {
      if (res){
        this.allOrdersList = res.data;
        this.totalCount = res;
      }
    });
  }

  changePage(event: any) {
    this.totalCount.page = event;
    this.getAllOrders();
  }

  toggleAll(select: string): void {
    this.updated.orderIds = [];
    if (select === 'selectAll') {
      this.unSelectAll = true;
      this.selectAll = true;
      if (this.selectAll === true) {
        this.allOrdersList.map((data) => {
          data.checked = true;
          this.updated.orderIds.push(data._id);
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
    // this.modalRef =  this.modelService.open(this.myModal, {size: 'sm', keyboard: false,
    //   hideCloseButton: false,
    //   centered: false,
    //   backdrop: false,
    //   animation: true,
    //   show:false,
    //   fade: false,
    //   closeOnOutsideClick: true,
    //   backdropClass:false});
    this.ngModalService.open(myModal, {windowClass: 'rightModel', keyboard: false, animation: true, backdrop: "static"});
  }

  close(): void {
    this.ngModalService.dismissAll();
  }

  proceed(myModal: any): void {
    this.ngModalService.open(myModal, {windowClass: 'rightModel', keyboard: false, animation: true, backdrop: "static"});
  }
}
