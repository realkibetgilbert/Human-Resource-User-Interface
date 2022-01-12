import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpayrollvariablepayComponent } from './newpayrollvariablepay.component';

describe('NewpayrollvariablepayComponent', () => {
  let component: NewpayrollvariablepayComponent;
  let fixture: ComponentFixture<NewpayrollvariablepayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpayrollvariablepayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpayrollvariablepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
