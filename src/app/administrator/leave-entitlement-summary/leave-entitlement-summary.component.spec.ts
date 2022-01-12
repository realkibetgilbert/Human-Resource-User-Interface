import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveEntitlementSummaryComponent } from './leave-entitlement-summary.component';

describe('LeaveEntitlementSummaryComponent', () => {
  let component: LeaveEntitlementSummaryComponent;
  let fixture: ComponentFixture<LeaveEntitlementSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveEntitlementSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveEntitlementSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
