import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoBodyComponent } from './carrito-body.component';

describe('CarritoBodyComponent', () => {
  let component: CarritoBodyComponent;
  let fixture: ComponentFixture<CarritoBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritoBodyComponent]
    });
    fixture = TestBed.createComponent(CarritoBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
