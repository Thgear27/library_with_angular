import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBodyComponent } from './search-body.component';

describe('SearchBodyComponent', () => {
  let component: SearchBodyComponent;
  let fixture: ComponentFixture<SearchBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBodyComponent]
    });
    fixture = TestBed.createComponent(SearchBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
