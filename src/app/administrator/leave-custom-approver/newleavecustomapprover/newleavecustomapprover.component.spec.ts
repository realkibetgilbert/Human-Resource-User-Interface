import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewleavecustomapproverComponent } from './newleavecustomapprover.component';

describe('NewleavecustomapproverComponent', () => {
  let component: NewleavecustomapproverComponent;
  let fixture: ComponentFixture<NewleavecustomapproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewleavecustomapproverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewleavecustomapproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
