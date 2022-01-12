import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerfilestorageComponent } from './employerfilestorage.component';

describe('EmployerfilestorageComponent', () => {
  let component: EmployerfilestorageComponent;
  let fixture: ComponentFixture<EmployerfilestorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerfilestorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerfilestorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
