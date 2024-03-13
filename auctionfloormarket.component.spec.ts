import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionfloormarketComponent } from './auctionfloormarket.component';

describe('AuctionfloormarketComponent', () => {
  let component: AuctionfloormarketComponent;
  let fixture: ComponentFixture<AuctionfloormarketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuctionfloormarketComponent]
    });
    fixture = TestBed.createComponent(AuctionfloormarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
