import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2m1',
  templateUrl: './component2m1.component.html',
  styleUrls: ['./component2m1.component.scss']
})
export class Component2m1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('#moduleTest: Component2m1Component rendered');
  }

}
