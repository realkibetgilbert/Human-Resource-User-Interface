import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancefieldcheckinComponent } from './attendancefieldcheckin.component';

describe('AttendancefieldcheckinComponent', () => {
  let component: AttendancefieldcheckinComponent;
  let fixture: ComponentFixture<AttendancefieldcheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendancefieldcheckinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancefieldcheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
