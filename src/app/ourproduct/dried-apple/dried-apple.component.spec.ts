import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriedAppleComponent } from './dried-apple.component';

describe('DriedAppleComponent', () => {
  let component: DriedAppleComponent;
  let fixture: ComponentFixture<DriedAppleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriedAppleComponent]
    });
    fixture = TestBed.createComponent(DriedAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
