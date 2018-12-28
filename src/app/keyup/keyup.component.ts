import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-keyup",
  template: `
    <input (keyup)="onKey($event)" />
    <p>{{ values }}</p>
  `
})
export class KeyupComponent {
  values = "";

  onKey(event: KeyboardEvent) {
    // without type info
    this.values += (<HTMLInputElement>event.target).value + " | ";
  }
}
