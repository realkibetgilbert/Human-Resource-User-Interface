import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerethnicityComponent } from './employerethnicity.component';

describe('EmployerethnicityComponent', () => {
  let component: EmployerethnicityComponent;
  let fixture: ComponentFixture<EmployerethnicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerethnicityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerethnicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
