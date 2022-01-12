import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseclaimmanagementComponent } from './expenseclaimmanagement.component';

describe('ExpenseclaimmanagementComponent', () => {
  let component: ExpenseclaimmanagementComponent;
  let fixture: ComponentFixture<ExpenseclaimmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseclaimmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseclaimmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
