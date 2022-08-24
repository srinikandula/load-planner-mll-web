import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-backend-layout',
  templateUrl: './backend-layout.component.html',
  styleUrls: ['./backend-layout.component.scss']
})
export class BackendLayoutComponent implements OnInit {
  view_head=true;
  constructor(private _sheard:SharedService) {
    this._sheard.view_head.subscribe(res => {
      this.view_head = res
    })
   }

  ngOnInit(): void {
  }

}
