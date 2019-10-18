import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mother2Component } from './mother2.component';

describe('Mother2Component', () => {
  let component: Mother2Component;
  let fixture: ComponentFixture<Mother2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mother2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mother2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
