import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1m1Component } from './component1m1.component';

describe('Component1m1Component', () => {
  let component: Component1m1Component;
  let fixture: ComponentFixture<Component1m1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component1m1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1m1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
