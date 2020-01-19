import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2m1Component } from './component2m1.component';

describe('Component2m1Component', () => {
  let component: Component2m1Component;
  let fixture: ComponentFixture<Component2m1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component2m1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2m1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
