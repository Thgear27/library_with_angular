import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypurchasesBodyComponent } from './mypurchases-body.component';

describe('MypurchasesBodyComponent', () => {
  let component: MypurchasesBodyComponent;
  let fixture: ComponentFixture<MypurchasesBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MypurchasesBodyComponent]
    });
    fixture = TestBed.createComponent(MypurchasesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
