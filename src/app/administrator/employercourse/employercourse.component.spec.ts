import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployercourseComponent } from './employercourse.component';

describe('EmployercourseComponent', () => {
  let component: EmployercourseComponent;
  let fixture: ComponentFixture<EmployercourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployercourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployercourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
