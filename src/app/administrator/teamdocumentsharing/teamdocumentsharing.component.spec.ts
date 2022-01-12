import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamdocumentsharingComponent } from './teamdocumentsharing.component';

describe('TeamdocumentsharingComponent', () => {
  let component: TeamdocumentsharingComponent;
  let fixture: ComponentFixture<TeamdocumentsharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamdocumentsharingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamdocumentsharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
