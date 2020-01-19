import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1m1Component } from './component1m1/component1m1.component';

const routes: Routes = [
  {path: '', component: Component1m1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
