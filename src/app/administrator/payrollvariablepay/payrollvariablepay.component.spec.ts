import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollvariablepayComponent } from './payrollvariablepay.component';

describe('PayrollvariablepayComponent', () => {
  let component: PayrollvariablepayComponent;
  let fixture: ComponentFixture<PayrollvariablepayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollvariablepayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollvariablepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
