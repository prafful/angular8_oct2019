import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Father2Component } from './father2.component';

describe('Father2Component', () => {
  let component: Father2Component;
  let fixture: ComponentFixture<Father2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Father2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Father2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
