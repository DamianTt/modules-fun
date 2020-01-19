import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1m2',
  templateUrl: './component1m2.component.html',
  styleUrls: ['./component1m2.component.scss']
})
export class Component1m2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('#moduleTest: Component1m2Component rendered, should have child component from library project');
  }

}
