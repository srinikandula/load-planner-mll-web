import { Component, OnInit } from '@angular/core';



 

@Component({
  selector: 'app-createsap',
  templateUrl: './createsap.component.html',
  styleUrls: ['./createsap.component.scss']
})



export class CreatesapComponent implements OnInit {

  
  constructor() { }
  public selectedVal: string;
  ngOnInit(): void {
    this.selectedVal ='option1';
  }
  public onValChange(val: string) {
    this.selectedVal = val;
  }
}
