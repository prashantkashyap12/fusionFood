import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackLamonComponent } from './black-lamon.component';

describe('BlackLamonComponent', () => {
  let component: BlackLamonComponent;
  let fixture: ComponentFixture<BlackLamonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlackLamonComponent]
    });
    fixture = TestBed.createComponent(BlackLamonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
