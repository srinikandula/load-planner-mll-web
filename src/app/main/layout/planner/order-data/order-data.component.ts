import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiUrls} from "../../../../schemas/apiUrls";
import {AuthenticationService} from "../../../../services/authentication.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiServiceService} from "../../../../services/api-service.service";

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
  constructor(private _httpClient: HttpClient,
              public _apiUrls: ApiUrls,
              private _authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private _apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(): void{
    this._apiService.get(this._apiUrls.getAllOrders + '?page=' + this.totalCount.page).subscribe((res: any) => {
      if (res){
        this.allOrdersList = res.data;
        this.totalCount = res;
        console.log('ty', this.allOrdersList);
      }
    });
  }

  changePage(event: any) {
    this.totalCount.page = event;
    this.getAllOrders();
  }
}
