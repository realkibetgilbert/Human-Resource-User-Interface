import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelegaldocumentComponent } from './employeelegaldocument.component';

describe('EmployeelegaldocumentComponent', () => {
  let component: EmployeelegaldocumentComponent;
  let fixture: ComponentFixture<EmployeelegaldocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeelegaldocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelegaldocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
