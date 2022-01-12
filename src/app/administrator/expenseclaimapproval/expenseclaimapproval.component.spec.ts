import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseclaimapprovalComponent } from './expenseclaimapproval.component';

describe('ExpenseclaimapprovalComponent', () => {
  let component: ExpenseclaimapprovalComponent;
  let fixture: ComponentFixture<ExpenseclaimapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseclaimapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseclaimapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
