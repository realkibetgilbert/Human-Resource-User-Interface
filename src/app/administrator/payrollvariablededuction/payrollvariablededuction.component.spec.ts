import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollvariabledeductionComponent } from './payrollvariablededuction.component';

describe('PayrollvariabledeductionComponent', () => {
  let component: PayrollvariabledeductionComponent;
  let fixture: ComponentFixture<PayrollvariabledeductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollvariabledeductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollvariabledeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
