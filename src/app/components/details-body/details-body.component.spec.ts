import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBodyComponent } from './details-body.component';

describe('DetailsBodyComponent', () => {
  let component: DetailsBodyComponent;
  let fixture: ComponentFixture<DetailsBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsBodyComponent]
    });
    fixture = TestBed.createComponent(DetailsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
