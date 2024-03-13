import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NafedpsfauctionfloorComponent } from './nafedpsfauctionfloor.component';

describe('NafedpsfauctionfloorComponent', () => {
  let component: NafedpsfauctionfloorComponent;
  let fixture: ComponentFixture<NafedpsfauctionfloorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NafedpsfauctionfloorComponent]
    });
    fixture = TestBed.createComponent(NafedpsfauctionfloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
