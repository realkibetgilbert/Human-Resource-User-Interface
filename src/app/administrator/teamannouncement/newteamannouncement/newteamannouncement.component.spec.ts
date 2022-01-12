import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewteamannouncementComponent } from './newteamannouncement.component';

describe('NewteamannouncementComponent', () => {
  let component: NewteamannouncementComponent;
  let fixture: ComponentFixture<NewteamannouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewteamannouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewteamannouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
