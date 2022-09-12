import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiUrls} from "../../../schemas/apiUrls";
import {AuthenticationService} from "../../../services/authentication.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiServiceService} from "../../../services/api-service.service";

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  tab = 1;

  public uploadFileComponent: boolean;
  public orderDataComponent: boolean;
  public plannedTripsComponent: boolean;
  public unPlannedTripsComponent: boolean;

  constructor(private _httpClient: HttpClient,
              public _apiUrls: ApiUrls,
              private _authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private _apiService: ApiServiceService) {
  }

  ngOnInit(): void {
    this.changeTab(1);
  }

  changeTab(tabKey: number): void {
    this.tab = tabKey ? tabKey : 1;
    switch (tabKey) {
      case 1:
        this.uploadFileComponent = true;
        this.orderDataComponent = false;
        this.plannedTripsComponent = false;
        this.unPlannedTripsComponent = false;
        break;
      case 2:
        this.uploadFileComponent = false;
        this.orderDataComponent = true;
        this.plannedTripsComponent = false;
        this.unPlannedTripsComponent = false;
        break;
      case 3:
        this.uploadFileComponent = false;
        this.orderDataComponent = false;
        this.plannedTripsComponent = true;
        this.unPlannedTripsComponent = false;
        break;
      case 4:
        this.uploadFileComponent = false;
        this.orderDataComponent = false;
        this.plannedTripsComponent = false;
        this.unPlannedTripsComponent = true;
    }
  }

  // downloadTemplate(): void{
  //   this._apiService.get(this._apiUrls.downloadTemplate).subscribe((res: any) => {
  //   });
  // }


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

  exportToExcel() {
    this._apiService.exportExcel('PlannedData', 'PlannedData', '', 11);
  }
}
