import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollhistoryComponent } from './payrollhistory.component';

describe('PayrollhistoryComponent', () => {
  let component: PayrollhistoryComponent;
  let fixture: ComponentFixture<PayrollhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
