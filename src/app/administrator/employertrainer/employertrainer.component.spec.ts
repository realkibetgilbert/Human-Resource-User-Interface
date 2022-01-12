import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployertrainerComponent } from './employertrainer.component';

describe('EmployertrainerComponent', () => {
  let component: EmployertrainerComponent;
  let fixture: ComponentFixture<EmployertrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployertrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployertrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
