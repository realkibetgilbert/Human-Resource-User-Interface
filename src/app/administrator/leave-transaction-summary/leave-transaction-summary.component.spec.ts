import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTransactionSummaryComponent } from './leave-transaction-summary.component';

describe('LeaveTransactionSummaryComponent', () => {
  let component: LeaveTransactionSummaryComponent;
  let fixture: ComponentFixture<LeaveTransactionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveTransactionSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveTransactionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
