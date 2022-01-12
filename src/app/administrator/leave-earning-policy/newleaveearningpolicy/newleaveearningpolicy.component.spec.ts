import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewleaveearningpolicyComponent } from './newleaveearningpolicy.component';

describe('NewleaveearningpolicyComponent', () => {
  let component: NewleaveearningpolicyComponent;
  let fixture: ComponentFixture<NewleaveearningpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewleaveearningpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewleaveearningpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
