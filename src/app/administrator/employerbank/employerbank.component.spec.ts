import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerbankComponent } from './employerbank.component';

describe('EmployerbankComponent', () => {
  let component: EmployerbankComponent;
  let fixture: ComponentFixture<EmployerbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
