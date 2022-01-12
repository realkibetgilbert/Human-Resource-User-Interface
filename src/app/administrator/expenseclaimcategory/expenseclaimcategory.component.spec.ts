import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseclaimcategoryComponent } from './expenseclaimcategory.component';

describe('ExpenseclaimcategoryComponent', () => {
  let component: ExpenseclaimcategoryComponent;
  let fixture: ComponentFixture<ExpenseclaimcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseclaimcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseclaimcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
