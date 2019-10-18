import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Family2Component } from './family2.component';

describe('Family2Component', () => {
  let component: Family2Component;
  let fixture: ComponentFixture<Family2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Family2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Family2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
