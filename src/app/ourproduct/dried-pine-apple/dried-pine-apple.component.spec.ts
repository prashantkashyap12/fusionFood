import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriedPineAppleComponent } from './dried-pine-apple.component';

describe('DriedPineAppleComponent', () => {
  let component: DriedPineAppleComponent;
  let fixture: ComponentFixture<DriedPineAppleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriedPineAppleComponent]
    });
    fixture = TestBed.createComponent(DriedPineAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
