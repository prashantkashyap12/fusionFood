import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OreganoComponent } from './oregano.component';

describe('OreganoComponent', () => {
  let component: OreganoComponent;
  let fixture: ComponentFixture<OreganoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OreganoComponent]
    });
    fixture = TestBed.createComponent(OreganoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
