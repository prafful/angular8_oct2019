import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Local1Component } from './local1.component';

describe('Local1Component', () => {
  let component: Local1Component;
  let fixture: ComponentFixture<Local1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Local1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Local1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
