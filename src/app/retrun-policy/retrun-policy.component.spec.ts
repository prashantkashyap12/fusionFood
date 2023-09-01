import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrunPolicyComponent } from './retrun-policy.component';

describe('RetrunPolicyComponent', () => {
  let component: RetrunPolicyComponent;
  let fixture: ComponentFixture<RetrunPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetrunPolicyComponent]
    });
    fixture = TestBed.createComponent(RetrunPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
