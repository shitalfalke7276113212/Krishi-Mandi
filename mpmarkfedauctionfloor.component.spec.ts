import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpmarkfedauctionfloorComponent } from './mpmarkfedauctionfloor.component';

describe('MpmarkfedauctionfloorComponent', () => {
  let component: MpmarkfedauctionfloorComponent;
  let fixture: ComponentFixture<MpmarkfedauctionfloorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MpmarkfedauctionfloorComponent]
    });
    fixture = TestBed.createComponent(MpmarkfedauctionfloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
