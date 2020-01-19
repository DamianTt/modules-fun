import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'component1m1', loadChildren: './modules/module1/module1.module#Module1Module'},
  {path: 'component1m2', loadChildren: './modules/module2/module2.module#Module2Module'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
