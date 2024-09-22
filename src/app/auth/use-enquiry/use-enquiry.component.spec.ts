import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseEnquiryComponent } from './use-enquiry.component';

describe('UseEnquiryComponent', () => {
  let component: UseEnquiryComponent;
  let fixture: ComponentFixture<UseEnquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseEnquiryComponent]
    });
    fixture = TestBed.createComponent(UseEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
