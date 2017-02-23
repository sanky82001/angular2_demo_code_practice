// In Event binding, user actions result in flow of data from element to component.
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title: string = 'Demonstration of event binding';
  counter: number = 0;
  inputData: string = 'Hello';

  incrementCounter() {
    this.counter = this.counter + 1;
  }

/*  setInputData(value: string) {
    this.inputData = value;
  }
*/
}
