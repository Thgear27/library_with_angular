import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypurchasesComponent } from './mypurchases.component';

describe('MypurchasesComponent', () => {
  let component: MypurchasesComponent;
  let fixture: ComponentFixture<MypurchasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MypurchasesComponent]
    });
    fixture = TestBed.createComponent(MypurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
