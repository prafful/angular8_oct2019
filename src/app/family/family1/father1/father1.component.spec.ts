import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Father1Component } from './father1.component';

describe('Father1Component', () => {
  let component: Father1Component;
  let fixture: ComponentFixture<Father1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Father1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Father1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
