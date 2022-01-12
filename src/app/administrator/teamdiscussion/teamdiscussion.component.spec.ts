import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamdiscussionComponent } from './teamdiscussion.component';

describe('TeamdiscussionComponent', () => {
  let component: TeamdiscussionComponent;
  let fixture: ComponentFixture<TeamdiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamdiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamdiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
