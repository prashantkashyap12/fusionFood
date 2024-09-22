import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetLimeComponent } from './sweet-lime.component';

describe('SweetLimeComponent', () => {
  let component: SweetLimeComponent;
  let fixture: ComponentFixture<SweetLimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweetLimeComponent]
    });
    fixture = TestBed.createComponent(SweetLimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
