import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriedPapayaComponent } from './dried-papaya.component';

describe('DriedPapayaComponent', () => {
  let component: DriedPapayaComponent;
  let fixture: ComponentFixture<DriedPapayaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriedPapayaComponent]
    });
    fixture = TestBed.createComponent(DriedPapayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
