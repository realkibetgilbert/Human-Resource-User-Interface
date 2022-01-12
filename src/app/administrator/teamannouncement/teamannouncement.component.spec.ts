import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamannouncementComponent } from './teamannouncement.component';

describe('TeamannouncementComponent', () => {
  let component: TeamannouncementComponent;
  let fixture: ComponentFixture<TeamannouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamannouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamannouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
