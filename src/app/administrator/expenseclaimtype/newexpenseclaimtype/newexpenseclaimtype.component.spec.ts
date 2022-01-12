import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexpenseclaimtypeComponent } from './newexpenseclaimtype.component';

describe('NewexpenseclaimtypeComponent', () => {
  let component: NewexpenseclaimtypeComponent;
  let fixture: ComponentFixture<NewexpenseclaimtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewexpenseclaimtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewexpenseclaimtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
