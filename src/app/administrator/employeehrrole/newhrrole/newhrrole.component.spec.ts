import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhrroleComponent } from './newhrrole.component';

describe('NewhrroleComponent', () => {
  let component: NewhrroleComponent;
  let fixture: ComponentFixture<NewhrroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewhrroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewhrroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
