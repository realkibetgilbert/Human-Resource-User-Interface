import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountchangeemailComponent } from './myaccountchangeemail.component';

describe('MyaccountchangeemailComponent', () => {
  let component: MyaccountchangeemailComponent;
  let fixture: ComponentFixture<MyaccountchangeemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyaccountchangeemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountchangeemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
