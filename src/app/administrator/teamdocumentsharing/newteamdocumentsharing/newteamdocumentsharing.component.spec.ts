import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewteamdocumentsharingComponent } from './newteamdocumentsharing.component';

describe('NewteamdocumentsharingComponent', () => {
  let component: NewteamdocumentsharingComponent;
  let fixture: ComponentFixture<NewteamdocumentsharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewteamdocumentsharingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewteamdocumentsharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
