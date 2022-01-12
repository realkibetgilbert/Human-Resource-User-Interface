import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtrainerComponent } from './newtrainer.component';

describe('NewtrainerComponent', () => {
  let component: NewtrainerComponent;
  let fixture: ComponentFixture<NewtrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
