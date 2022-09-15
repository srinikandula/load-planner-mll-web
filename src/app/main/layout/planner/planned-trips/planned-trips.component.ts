import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiUrls} from "../../../../schemas/apiUrls";
import {AuthenticationService} from "../../../../services/authentication.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ModalManager} from "ngb-modal";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ApiServiceService} from "../../../../services/api-service.service";

@Component({
  selector: 'app-planned-trips',
  templateUrl: './planned-trips.component.html',
  styleUrls: ['./planned-trips.component.scss']
})
export class PlannedTripsComponent implements OnInit {
  @Input() tab: any;
  public plannedOrdersList: Array<any> = [];
  public plannedData: any = {
    page: 1,
    count: 10,
  };
  public totalCount: any= {
  };
  public  selectAll: boolean;
  orderIdsSet: any = []
  public updated = {
    plannedOrderIds: this.orderIdsSet,
  };

  constructor(private _httpClient: HttpClient,
              public _apiUrls: ApiUrls,
              private _authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private modelService: ModalManager,
              private ngModalService: NgbModal,
              private _apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getPlannedOrders();
  }


  getPlannedOrders(): void{
    this._apiService.getAll(this._apiUrls.plannedTrips, this.plannedData).subscribe((res: any) => {
      if (res){
        this.plannedOrdersList = res.data;
        this.totalCount = res;
      }
    });
  }

  toggleAll() {
    if (this.selectAll === true) {
      this.plannedOrdersList.map((data) => {
        data.checked = true;
        this.updated.plannedOrderIds.push(data._id);
      });
    } else {
      this.plannedOrdersList.map((data) => {
        data.checked = false;
      });
    }
  }

  toggleDeviceIds(status:any, orders: any) {
    if (this.plannedOrdersList.every(a => a.checked)) {
      this.updated.plannedOrderIds.push(orders._id);
      this.selectAll = true;
    } else if (status){
      this.updated.plannedOrderIds.push(orders._id);
    } else {
      this.selectAll = false;
      // @ts-ignore
      const eindex = this.updated.orderIds.indexOf(orders._id);
      if (eindex > -1) {
        this.updated.plannedOrderIds.splice(eindex, 1);
      }
    }
  }


  changePage(event: any) {
    this.plannedData.page = event;
    this.getPlannedOrders();
  }


}
