import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerjobpositionComponent } from './employerjobposition.component';

describe('EmployerjobpositionComponent', () => {
  let component: EmployerjobpositionComponent;
  let fixture: ComponentFixture<EmployerjobpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerjobpositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerjobpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
