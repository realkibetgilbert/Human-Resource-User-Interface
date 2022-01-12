import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseclaimtypeComponent } from './expenseclaimtype.component';

describe('ExpenseclaimtypeComponent', () => {
  let component: ExpenseclaimtypeComponent;
  let fixture: ComponentFixture<ExpenseclaimtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseclaimtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseclaimtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
