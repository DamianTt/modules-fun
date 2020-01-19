import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1m2Component } from './component1m2/component1m2.component';

const routes: Routes = [
  {path: '', component: Component1m2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
