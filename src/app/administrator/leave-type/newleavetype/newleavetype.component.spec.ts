import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewleavetypeComponent } from './newleavetype.component';

describe('NewleavetypeComponent', () => {
  let component: NewleavetypeComponent;
  let fixture: ComponentFixture<NewleavetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewleavetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewleavetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
