import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewteamdiscussionComponent } from './newteamdiscussion.component';

describe('NewteamdiscussionComponent', () => {
  let component: NewteamdiscussionComponent;
  let fixture: ComponentFixture<NewteamdiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewteamdiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewteamdiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
