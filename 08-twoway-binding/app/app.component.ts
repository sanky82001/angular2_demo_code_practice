// To both display a data property and update that property when the user makes changes, two-way data binding is used.
// [( )] = BANANA IN A BOX
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title: string = 'Demonstration of Two-way binding';
  name: string = 'James Gosling';
  location: string = 'Pune';

  setUpperCaseLocation(locationData: string) {
    this.location = locationData.toUpperCase();
  }
}
