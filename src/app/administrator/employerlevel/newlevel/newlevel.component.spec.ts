import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlevelComponent } from './newlevel.component';

describe('NewlevelComponent', () => {
  let component: NewlevelComponent;
  let fixture: ComponentFixture<NewlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
