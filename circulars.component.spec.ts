import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularsComponent } from './circulars.component';

describe('CircularComponent', () => {
  let component: CircularsComponent;
  let fixture: ComponentFixture<CircularsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircularsComponent]
    });
    fixture = TestBed.createComponent(CircularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
