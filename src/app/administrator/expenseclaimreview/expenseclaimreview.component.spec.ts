import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseclaimreviewComponent } from './expenseclaimreview.component';

describe('ExpenseclaimreviewComponent', () => {
  let component: ExpenseclaimreviewComponent;
  let fixture: ComponentFixture<ExpenseclaimreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseclaimreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseclaimreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
