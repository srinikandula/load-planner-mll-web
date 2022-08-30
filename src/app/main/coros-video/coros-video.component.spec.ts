import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorosVideoComponent } from './coros-video.component';

describe('CorosVideoComponent', () => {
  let component: CorosVideoComponent;
  let fixture: ComponentFixture<CorosVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorosVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorosVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
