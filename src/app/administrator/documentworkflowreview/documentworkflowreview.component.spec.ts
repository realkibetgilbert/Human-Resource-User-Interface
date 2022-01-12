import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentworkflowreviewComponent } from './documentworkflowreview.component';

describe('DocumentworkflowreviewComponent', () => {
  let component: DocumentworkflowreviewComponent;
  let fixture: ComponentFixture<DocumentworkflowreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentworkflowreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentworkflowreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
