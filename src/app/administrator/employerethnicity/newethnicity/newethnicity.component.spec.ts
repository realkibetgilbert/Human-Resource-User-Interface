import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewethnicityComponent } from './newethnicity.component';

describe('NewethnicityComponent', () => {
  let component: NewethnicityComponent;
  let fixture: ComponentFixture<NewethnicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewethnicityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewethnicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
