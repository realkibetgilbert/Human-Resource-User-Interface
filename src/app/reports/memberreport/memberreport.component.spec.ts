import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberreportComponent } from './memberreport.component';

describe('MemberreportComponent', () => {
  let component: MemberreportComponent;
  let fixture: ComponentFixture<MemberreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
