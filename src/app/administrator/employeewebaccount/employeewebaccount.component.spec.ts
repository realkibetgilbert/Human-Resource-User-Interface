import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeewebaccountComponent } from './employeewebaccount.component';

describe('EmployeewebaccountComponent', () => {
  let component: EmployeewebaccountComponent;
  let fixture: ComponentFixture<EmployeewebaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeewebaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeewebaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
