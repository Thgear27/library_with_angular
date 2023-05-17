import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOnlyLogoComponent } from './navbar-only-logo.component';

describe('NavbarOnlyLogoComponent', () => {
  let component: NavbarOnlyLogoComponent;
  let fixture: ComponentFixture<NavbarOnlyLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarOnlyLogoComponent]
    });
    fixture = TestBed.createComponent(NavbarOnlyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
