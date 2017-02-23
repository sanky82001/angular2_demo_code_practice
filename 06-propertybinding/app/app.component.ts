// Property binding is one-way binding, from component's data property into a target element property.
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Demonstration of {{demoName}}</h1>
  <p [title]='paragraphTitle'>Mouse over this paragraph to check about the title property</p>
  <button [disabled]='isDisabled'>Button1</button>
  `
})
export class AppComponent {
  demoName: string = 'Property Binding';
  paragraphTitle: string = 'This appears as a tooltip for the paragraph';
  isDisabled: boolean = false;
}
