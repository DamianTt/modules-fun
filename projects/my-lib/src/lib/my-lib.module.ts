import { NgModule } from '@angular/core';
import { SimpleComponent } from './components/simple/simple.component';
import { ComplexComponent } from './components/complex/complex.component';

@NgModule({
  declarations: [SimpleComponent, ComplexComponent],
  imports: [
  ],
  exports: [SimpleComponent, ComplexComponent]
})
export class MyLibModule { }
