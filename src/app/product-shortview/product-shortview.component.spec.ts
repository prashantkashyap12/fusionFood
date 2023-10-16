import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShortviewComponent } from './product-shortview.component';

describe('ProductShortviewComponent', () => {
  let component: ProductShortviewComponent;
  let fixture: ComponentFixture<ProductShortviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductShortviewComponent]
    });
    fixture = TestBed.createComponent(ProductShortviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
