import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1m2Component } from './component1m2/component1m2.component';
import { Module2RoutingModule } from './module2-routing.module';
import { MyLibModule } from 'my-lib';

@NgModule({
  declarations: [Component1m2Component],
  imports: [
    CommonModule, Module2RoutingModule, MyLibModule
  ]
})
export class Module2Module { }
