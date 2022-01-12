import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpayrollvariabledeductionComponent } from './newpayrollvariablededuction.component';

describe('NewpayrollvariabledeductionComponent', () => {
  let component: NewpayrollvariabledeductionComponent;
  let fixture: ComponentFixture<NewpayrollvariabledeductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpayrollvariabledeductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpayrollvariabledeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
