import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilliFlakesComponent } from './chilli-flakes.component';

describe('ChilliFlakesComponent', () => {
  let component: ChilliFlakesComponent;
  let fixture: ComponentFixture<ChilliFlakesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChilliFlakesComponent]
    });
    fixture = TestBed.createComponent(ChilliFlakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
