import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployercustomapproverComponent } from './employercustomapprover.component';

describe('EmployercustomapproverComponent', () => {
  let component: EmployercustomapproverComponent;
  let fixture: ComponentFixture<EmployercustomapproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployercustomapproverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployercustomapproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
