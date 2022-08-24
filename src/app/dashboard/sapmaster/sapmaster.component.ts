import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sapmaster',
  templateUrl: './sapmaster.component.html',
  styleUrls: ['./sapmaster.component.scss']
})
export class SAPmasterComponent implements OnInit {

  constructor() { }
  public selectedVal: string;
  ngOnInit(): void {
    this.selectedVal ='option2';
  }
  public onValChange(val: string) {
    this.selectedVal = val;
  }

}
