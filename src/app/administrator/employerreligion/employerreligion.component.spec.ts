import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerreligionComponent } from './employerreligion.component';

describe('EmployerreligionComponent', () => {
  let component: EmployerreligionComponent;
  let fixture: ComponentFixture<EmployerreligionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerreligionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerreligionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
