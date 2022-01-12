import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstatutorycontributionComponent } from './newstatutorycontribution.component';

describe('NewstatutorycontributionComponent', () => {
  let component: NewstatutorycontributionComponent;
  let fixture: ComponentFixture<NewstatutorycontributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewstatutorycontributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstatutorycontributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
