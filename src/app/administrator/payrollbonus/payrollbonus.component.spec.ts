import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollbonusComponent } from './payrollbonus.component';

describe('PayrollbonusComponent', () => {
  let component: PayrollbonusComponent;
  let fixture: ComponentFixture<PayrollbonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollbonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollbonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
