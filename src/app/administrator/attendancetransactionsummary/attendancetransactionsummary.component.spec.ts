import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancetransactionsummaryComponent } from './attendancetransactionsummary.component';

describe('AttendancetransactionsummaryComponent', () => {
  let component: AttendancetransactionsummaryComponent;
  let fixture: ComponentFixture<AttendancetransactionsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendancetransactionsummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancetransactionsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
