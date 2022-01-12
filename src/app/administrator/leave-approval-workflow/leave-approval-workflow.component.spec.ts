import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApprovalWorkflowComponent } from './leave-approval-workflow.component';

describe('LeaveApprovalWorkflowComponent', () => {
  let component: LeaveApprovalWorkflowComponent;
  let fixture: ComponentFixture<LeaveApprovalWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveApprovalWorkflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveApprovalWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
