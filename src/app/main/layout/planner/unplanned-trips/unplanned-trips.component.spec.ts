import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnplannedTripsComponent } from './unplanned-trips.component';

describe('UnplannedTripsComponent', () => {
  let component: UnplannedTripsComponent;
  let fixture: ComponentFixture<UnplannedTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnplannedTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnplannedTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
