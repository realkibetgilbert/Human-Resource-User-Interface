import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeehrroleComponent } from './employeehrrole.component';

describe('EmployeehrroleComponent', () => {
  let component: EmployeehrroleComponent;
  let fixture: ComponentFixture<EmployeehrroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeehrroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeehrroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
