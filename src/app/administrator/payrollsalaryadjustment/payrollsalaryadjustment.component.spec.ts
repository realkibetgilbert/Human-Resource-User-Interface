import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollsalaryadjustmentComponent } from './payrollsalaryadjustment.component';

describe('PayrollsalaryadjustmentComponent', () => {
  let component: PayrollsalaryadjustmentComponent;
  let fixture: ComponentFixture<PayrollsalaryadjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollsalaryadjustmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollsalaryadjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
