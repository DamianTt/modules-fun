import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1m2Component } from './component1m2.component';

describe('Component1m2Component', () => {
  let component: Component1m2Component;
  let fixture: ComponentFixture<Component1m2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component1m2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1m2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
