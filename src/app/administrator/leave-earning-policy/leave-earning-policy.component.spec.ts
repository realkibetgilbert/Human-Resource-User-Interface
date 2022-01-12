import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveEarningPolicyComponent } from './leave-earning-policy.component';

describe('LeaveEarningPolicyComponent', () => {
  let component: LeaveEarningPolicyComponent;
  let fixture: ComponentFixture<LeaveEarningPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveEarningPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveEarningPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
