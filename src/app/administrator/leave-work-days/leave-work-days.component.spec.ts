import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveWorkDaysComponent } from './leave-work-days.component';

describe('LeaveWorkDaysComponent', () => {
  let component: LeaveWorkDaysComponent;
  let fixture: ComponentFixture<LeaveWorkDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveWorkDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveWorkDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
