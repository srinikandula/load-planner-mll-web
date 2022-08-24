import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesapComponent } from './createsap.component';

describe('CreatesapComponent', () => {
  let component: CreatesapComponent;
  let fixture: ComponentFixture<CreatesapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
