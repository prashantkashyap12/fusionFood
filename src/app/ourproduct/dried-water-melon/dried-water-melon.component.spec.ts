import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriedWaterMelonComponent } from './dried-water-melon.component';

describe('DriedWaterMelonComponent', () => {
  let component: DriedWaterMelonComponent;
  let fixture: ComponentFixture<DriedWaterMelonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriedWaterMelonComponent]
    });
    fixture = TestBed.createComponent(DriedWaterMelonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
