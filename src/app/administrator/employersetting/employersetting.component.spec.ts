import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersettingComponent } from './employersetting.component';

describe('EmployersettingComponent', () => {
  let component: EmployersettingComponent;
  let fixture: ComponentFixture<EmployersettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
