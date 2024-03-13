import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NafedauctionfloorComponent } from './nafedauctionfloor.component';

describe('NafedauctionfloorComponent', () => {
  let component: NafedauctionfloorComponent;
  let fixture: ComponentFixture<NafedauctionfloorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NafedauctionfloorComponent]
    });
    fixture = TestBed.createComponent(NafedauctionfloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
