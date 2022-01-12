import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerbranchComponent } from './employerbranch.component';

describe('EmployerbranchComponent', () => {
  let component: EmployerbranchComponent;
  let fixture: ComponentFixture<EmployerbranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerbranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
