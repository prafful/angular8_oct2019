import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Local2Component } from './local2.component';

describe('Local2Component', () => {
  let component: Local2Component;
  let fixture: ComponentFixture<Local2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Local2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Local2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
