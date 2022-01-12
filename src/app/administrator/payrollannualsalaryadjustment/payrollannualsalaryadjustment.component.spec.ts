import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollannualsalaryadjustmentComponent } from './payrollannualsalaryadjustment.component';

describe('PayrollannualsalaryadjustmentComponent', () => {
  let component: PayrollannualsalaryadjustmentComponent;
  let fixture: ComponentFixture<PayrollannualsalaryadjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollannualsalaryadjustmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollannualsalaryadjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
