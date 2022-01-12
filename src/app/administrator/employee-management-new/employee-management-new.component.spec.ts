import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagementNewComponent } from './employee-management-new.component';

describe('EmployeeManagementNewComponent', () => {
  let component: EmployeeManagementNewComponent;
  let fixture: ComponentFixture<EmployeeManagementNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeManagementNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeManagementNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
