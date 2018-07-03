import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsCoordinatesCardComponent } from './gps-coordinates-card.component';

describe('GpsCoordinatesCardComponent', () => {
  let component: GpsCoordinatesCardComponent;
  let fixture: ComponentFixture<GpsCoordinatesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsCoordinatesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsCoordinatesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
