// Class binding
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles:['.selected { color: red; }'],
  template: `
  <ul>
    <li *ngFor="let fruit of fruits" [class.selected]="fruit.selected" (click)='onClick(fruit)'>
      {{ fruit.name }}
    </li>
  </ul>`
})
export class AppComponent {
  title: string = 'Class Binding Demonstration';
  fruits = [
    {
      "id": 1,
      "name": "Apple",
      "selected": false
    },
    {
      "id": 2,
      "name": "Orange",
      "selected": false
    }
  ];
  onClick(item: any) {
    for (let i=0; i < this.fruits.length; i++)
      this.fruits[i].selected = false;
    this.fruits[item.id - 1].selected = true;
  } 
}
