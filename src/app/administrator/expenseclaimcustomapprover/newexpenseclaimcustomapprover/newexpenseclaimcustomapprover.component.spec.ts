import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexpenseclaimcustomapproverComponent } from './newexpenseclaimcustomapprover.component';

describe('NewexpenseclaimcustomapproverComponent', () => {
  let component: NewexpenseclaimcustomapproverComponent;
  let fixture: ComponentFixture<NewexpenseclaimcustomapproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewexpenseclaimcustomapproverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewexpenseclaimcustomapproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
