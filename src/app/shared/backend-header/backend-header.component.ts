import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend-header',
  templateUrl: './backend-header.component.html',
  styleUrls: ['./backend-header.component.scss']
})
export class BackendHeaderComponent implements OnInit {
arr_class = false;
  constructor() { }

  ngOnInit(): void {
  }
  view_toggel(){
    this.arr_class = !this.arr_class;
    console.log(this.arr_class)
  }
}
