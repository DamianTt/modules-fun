import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.css']
})
export class ComplexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('#libraryTest: ComplexComponent rendered');
  }

}
