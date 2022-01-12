import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomapproverComponent } from './newcustomapprover.component';

describe('NewcustomapproverComponent', () => {
  let component: NewcustomapproverComponent;
  let fixture: ComponentFixture<NewcustomapproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcustomapproverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcustomapproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
