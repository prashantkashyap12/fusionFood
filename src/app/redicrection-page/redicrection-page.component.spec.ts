import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedicrectionPageComponent } from './redicrection-page.component';

describe('RedicrectionPageComponent', () => {
  let component: RedicrectionPageComponent;
  let fixture: ComponentFixture<RedicrectionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedicrectionPageComponent]
    });
    fixture = TestBed.createComponent(RedicrectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
