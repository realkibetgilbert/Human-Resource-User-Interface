import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdocumentworkflowcustomapproverComponent } from './newdocumentworkflowcustomapprover.component';

describe('NewdocumentworkflowcustomapproverComponent', () => {
  let component: NewdocumentworkflowcustomapproverComponent;
  let fixture: ComponentFixture<NewdocumentworkflowcustomapproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdocumentworkflowcustomapproverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdocumentworkflowcustomapproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
