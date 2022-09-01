import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coros-video',
  templateUrl: './coros-video.component.html',
  styleUrls: ['./coros-video.component.scss']
})
export class CorosVideoComponent implements OnInit {

  @Input() image: any;

  constructor() { }

  ngOnInit(): void {
  }

}
