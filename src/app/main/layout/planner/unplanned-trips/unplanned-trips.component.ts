import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-unplanned-trips',
  templateUrl: './unplanned-trips.component.html',
  styleUrls: ['./unplanned-trips.component.scss']
})
export class UnplannedTripsComponent implements OnInit {
  @Input() tab: any;
  constructor() { }

  ngOnInit(): void {
  }

}
