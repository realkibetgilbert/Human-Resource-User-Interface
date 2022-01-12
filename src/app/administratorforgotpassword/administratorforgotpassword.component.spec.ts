import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorforgotpasswordComponent } from './administratorforgotpassword.component';

describe('AdministratorforgotpasswordComponent', () => {
  let component: AdministratorforgotpasswordComponent;
  let fixture: ComponentFixture<AdministratorforgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorforgotpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorforgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
