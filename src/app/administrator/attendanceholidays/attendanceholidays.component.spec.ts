import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceholidaysComponent } from './attendanceholidays.component';

describe('AttendanceholidaysComponent', () => {
  let component: AttendanceholidaysComponent;
  let fixture: ComponentFixture<AttendanceholidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceholidaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceholidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
