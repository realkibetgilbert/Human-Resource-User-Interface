import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentworkflowapprovalworkflowComponent } from './documentworkflowapprovalworkflow.component';

describe('DocumentworkflowapprovalworkflowComponent', () => {
  let component: DocumentworkflowapprovalworkflowComponent;
  let fixture: ComponentFixture<DocumentworkflowapprovalworkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentworkflowapprovalworkflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentworkflowapprovalworkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
