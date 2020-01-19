import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1m1',
  templateUrl: './component1m1.component.html',
  styleUrls: ['./component1m1.component.scss']
})
export class Component1m1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('#moduleTest: Component1m1Component rendered');
  }

}
