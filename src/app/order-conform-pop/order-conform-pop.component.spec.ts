import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConformPopComponent } from './order-conform-pop.component';

describe('OrderConformPopComponent', () => {
  let component: OrderConformPopComponent;
  let fixture: ComponentFixture<OrderConformPopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderConformPopComponent]
    });
    fixture = TestBed.createComponent(OrderConformPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
