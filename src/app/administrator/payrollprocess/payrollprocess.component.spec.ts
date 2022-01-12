import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollprocessComponent } from './payrollprocess.component';

describe('PayrollprocessComponent', () => {
  let component: PayrollprocessComponent;
  let fixture: ComponentFixture<PayrollprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
