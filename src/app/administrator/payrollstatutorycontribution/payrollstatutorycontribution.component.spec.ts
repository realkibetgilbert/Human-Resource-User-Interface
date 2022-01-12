import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollstatutorycontributionComponent } from './payrollstatutorycontribution.component';

describe('PayrollstatutorycontributionComponent', () => {
  let component: PayrollstatutorycontributionComponent;
  let fixture: ComponentFixture<PayrollstatutorycontributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollstatutorycontributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollstatutorycontributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
