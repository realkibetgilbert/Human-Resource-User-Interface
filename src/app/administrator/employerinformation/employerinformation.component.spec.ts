import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerinformationComponent } from './employerinformation.component';

describe('EmployerinformationComponent', () => {
  let component: EmployerinformationComponent;
  let fixture: ComponentFixture<EmployerinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
