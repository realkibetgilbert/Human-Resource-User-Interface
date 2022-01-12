import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerlevelComponent } from './employerlevel.component';

describe('EmployerlevelComponent', () => {
  let component: EmployerlevelComponent;
  let fixture: ComponentFixture<EmployerlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerlevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
