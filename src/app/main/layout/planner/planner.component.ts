import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
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

}
