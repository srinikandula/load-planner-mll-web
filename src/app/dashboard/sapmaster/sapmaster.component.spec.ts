import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAPmasterComponent } from './sapmaster.component';

describe('SAPmasterComponent', () => {
  let component: SAPmasterComponent;
  let fixture: ComponentFixture<SAPmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAPmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAPmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
