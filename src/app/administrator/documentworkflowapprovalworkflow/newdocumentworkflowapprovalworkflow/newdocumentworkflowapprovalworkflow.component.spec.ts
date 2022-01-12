import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdocumentworkflowapprovalworkflowComponent } from './newdocumentworkflowapprovalworkflow.component';

describe('NewdocumentworkflowapprovalworkflowComponent', () => {
  let component: NewdocumentworkflowapprovalworkflowComponent;
  let fixture: ComponentFixture<NewdocumentworkflowapprovalworkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdocumentworkflowapprovalworkflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdocumentworkflowapprovalworkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
