import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loopback',
  template: `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
