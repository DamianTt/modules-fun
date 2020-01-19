import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1m1Component } from './component1m1/component1m1.component';
import { Module1RoutingModule } from './module1-routing.module';
import { Component2m1Component } from './component2m1/component2m1.component';

@NgModule({
  declarations: [Component1m1Component, Component2m1Component],
  imports: [
    CommonModule, Module1RoutingModule
  ]
})
export class Module1Module { }
