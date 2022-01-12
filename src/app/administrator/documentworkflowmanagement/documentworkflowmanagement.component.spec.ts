import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentworkflowmanagementComponent } from './documentworkflowmanagement.component';

describe('DocumentworkflowmanagementComponent', () => {
  let component: DocumentworkflowmanagementComponent;
  let fixture: ComponentFixture<DocumentworkflowmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentworkflowmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentworkflowmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
