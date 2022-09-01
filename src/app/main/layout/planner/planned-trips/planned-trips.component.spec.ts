import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedTripsComponent } from './planned-trips.component';

describe('PlannedTripsComponent', () => {
  let component: PlannedTripsComponent;
  let fixture: ComponentFixture<PlannedTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannedTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
