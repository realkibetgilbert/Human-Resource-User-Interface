import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexpenseclaimcategoryComponent } from './newexpenseclaimcategory.component';

describe('NewexpenseclaimcategoryComponent', () => {
  let component: NewexpenseclaimcategoryComponent;
  let fixture: ComponentFixture<NewexpenseclaimcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewexpenseclaimcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewexpenseclaimcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
