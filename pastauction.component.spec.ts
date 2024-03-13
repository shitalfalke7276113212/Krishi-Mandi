import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastauctionComponent } from './pastauction.component';

describe('PastauctionComponent', () => {
  let component: PastauctionComponent;
  let fixture: ComponentFixture<PastauctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastauctionComponent]
    });
    fixture = TestBed.createComponent(PastauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
