import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdocumentcategoryComponent } from './newdocumentcategory.component';

describe('NewdocumentcategoryComponent', () => {
  let component: NewdocumentcategoryComponent;
  let fixture: ComponentFixture<NewdocumentcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdocumentcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdocumentcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
