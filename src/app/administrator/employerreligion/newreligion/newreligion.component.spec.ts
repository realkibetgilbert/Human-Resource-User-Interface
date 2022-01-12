import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewreligionComponent } from './newreligion.component';

describe('NewreligionComponent', () => {
  let component: NewreligionComponent;
  let fixture: ComponentFixture<NewreligionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewreligionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewreligionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
