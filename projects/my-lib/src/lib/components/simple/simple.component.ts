import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('#libraryTest: SimpleComponent rendered');
  }

}
