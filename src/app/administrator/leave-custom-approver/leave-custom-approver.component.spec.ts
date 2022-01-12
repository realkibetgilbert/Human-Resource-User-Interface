import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCustomApproverComponent } from './leave-custom-approver.component';

describe('LeaveCustomApproverComponent', () => {
  let component: LeaveCustomApproverComponent;
  let fixture: ComponentFixture<LeaveCustomApproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveCustomApproverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveCustomApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
