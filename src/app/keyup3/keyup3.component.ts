import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-keyup3",
  template: `
    <input #box 
    (keyup.enter)="update(box.value)" 
    (blur)="update(box.value)" />
    <p>{{ value }}</p>
  `
})
export class KeyupComponent3 {
  value = "";
  update(value: string) {
    this.value = value;
  }
}
