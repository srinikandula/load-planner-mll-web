import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  public UserComponent: boolean;
  tab = 1;
  @Input() status: any;
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tabKey: number, status: any): void {
    this.tab = tabKey ? tabKey : 1;
    switch (tabKey) {
      case 1:
        if (status === 'pending'){
          this.status = status;
          this.UserComponent = true;
        } else {
          this.UserComponent = false;
        }
        break;
      case 2:
        if (status === 'active'){
          this.status = status;
          this.UserComponent = true;
        } else {
          this.UserComponent = false;
        }
        break;
    }
  }

}
