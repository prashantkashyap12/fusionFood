import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedChilliComponent } from './red-chilli.component';

describe('RedChilliComponent', () => {
  let component: RedChilliComponent;
  let fixture: ComponentFixture<RedChilliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedChilliComponent]
    });
    fixture = TestBed.createComponent(RedChilliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
