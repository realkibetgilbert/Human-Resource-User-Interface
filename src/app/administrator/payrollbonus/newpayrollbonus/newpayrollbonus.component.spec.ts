import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpayrollbonusComponent } from './newpayrollbonus.component';

describe('NewpayrollbonusComponent', () => {
  let component: NewpayrollbonusComponent;
  let fixture: ComponentFixture<NewpayrollbonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpayrollbonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpayrollbonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
