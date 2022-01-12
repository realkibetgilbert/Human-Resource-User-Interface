import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountchangepasswordComponent } from './myaccountchangepassword.component';

describe('MyaccountchangepasswordComponent', () => {
  let component: MyaccountchangepasswordComponent;
  let fixture: ComponentFixture<MyaccountchangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyaccountchangepasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountchangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
