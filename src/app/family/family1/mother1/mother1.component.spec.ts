import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mother1Component } from './mother1.component';

describe('Mother1Component', () => {
  let component: Mother1Component;
  let fixture: ComponentFixture<Mother1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mother1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mother1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
