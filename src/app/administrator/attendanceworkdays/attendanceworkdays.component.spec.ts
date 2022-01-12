import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceworkdaysComponent } from './attendanceworkdays.component';

describe('AttendanceworkdaysComponent', () => {
  let component: AttendanceworkdaysComponent;
  let fixture: ComponentFixture<AttendanceworkdaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceworkdaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceworkdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
