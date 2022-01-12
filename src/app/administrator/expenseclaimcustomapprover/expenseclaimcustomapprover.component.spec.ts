import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseclaimcustomapproverComponent } from './expenseclaimcustomapprover.component';

describe('ExpenseclaimcustomapproverComponent', () => {
  let component: ExpenseclaimcustomapproverComponent;
  let fixture: ComponentFixture<ExpenseclaimcustomapproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseclaimcustomapproverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseclaimcustomapproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
