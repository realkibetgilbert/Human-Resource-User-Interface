import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseclaimtransactionComponent } from './expenseclaimtransaction.component';

describe('ExpenseclaimtransactionComponent', () => {
  let component: ExpenseclaimtransactionComponent;
  let fixture: ComponentFixture<ExpenseclaimtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseclaimtransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseclaimtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
