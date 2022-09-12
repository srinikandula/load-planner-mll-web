import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-planned-trips',
  templateUrl: './planned-trips.component.html',
  styleUrls: ['./planned-trips.component.scss']
})
export class PlannedTripsComponent implements OnInit {
  @Input() tab: any;
  public plannedOrdersList: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
