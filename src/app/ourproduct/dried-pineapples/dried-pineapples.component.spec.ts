import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriedPineapplesComponent } from './dried-pineapples.component';

describe('DriedPineapplesComponent', () => {
  let component: DriedPineapplesComponent;
  let fixture: ComponentFixture<DriedPineapplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriedPineapplesComponent]
    });
    fixture = TestBed.createComponent(DriedPineapplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
