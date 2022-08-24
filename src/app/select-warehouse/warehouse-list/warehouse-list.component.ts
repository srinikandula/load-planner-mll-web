import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit, OnDestroy {

  constructor(private _sharserv:SharedService) { }

  ngOnInit(): void {
    this._sharserv.view_head.next(false)
    
  }
  ngOnDestroy(): void {
    this._sharserv.view_head.next(true)
  }

  
}
