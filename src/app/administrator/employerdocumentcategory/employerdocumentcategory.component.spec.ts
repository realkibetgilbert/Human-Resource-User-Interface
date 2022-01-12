import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerdocumentcategoryComponent } from './employerdocumentcategory.component';

describe('EmployerdocumentcategoryComponent', () => {
  let component: EmployerdocumentcategoryComponent;
  let fixture: ComponentFixture<EmployerdocumentcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerdocumentcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerdocumentcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
