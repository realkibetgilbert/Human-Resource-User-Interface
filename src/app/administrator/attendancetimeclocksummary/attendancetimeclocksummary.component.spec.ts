import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancetimeclocksummaryComponent } from './attendancetimeclocksummary.component';

describe('AttendancetimeclocksummaryComponent', () => {
  let component: AttendancetimeclocksummaryComponent;
  let fixture: ComponentFixture<AttendancetimeclocksummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendancetimeclocksummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancetimeclocksummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
