import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerdepartmentComponent } from './employerdepartment.component';

describe('EmployerdepartmentComponent', () => {
  let component: EmployerdepartmentComponent;
  let fixture: ComponentFixture<EmployerdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerdepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
