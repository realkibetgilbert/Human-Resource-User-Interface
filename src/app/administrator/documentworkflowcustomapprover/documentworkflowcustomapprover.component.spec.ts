import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentworkflowcustomapproverComponent } from './documentworkflowcustomapprover.component';

describe('DocumentworkflowcustomapproverComponent', () => {
  let component: DocumentworkflowcustomapproverComponent;
  let fixture: ComponentFixture<DocumentworkflowcustomapproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentworkflowcustomapproverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentworkflowcustomapproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
