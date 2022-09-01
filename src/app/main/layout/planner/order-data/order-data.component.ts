import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  styleUrls: ['./order-data.component.scss']
})
export class OrderDataComponent implements OnInit {
  @Input() tab: any;
  constructor() { }

  ngOnInit(): void {
  }

}
