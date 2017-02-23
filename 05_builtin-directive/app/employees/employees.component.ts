// Angular Built-in directives: ngIf is used for if logic while rendering HTML and ngFor is used for loops in HTML rendering
// These are Structural directives and should be prefixed with *.
import { Component } from '@angular/core';

@Component({
  selector: 'my-emp',
  templateUrl: 'app/employees/employees.component.html'
})
export class EmployeesComponent {
  title: string = 'Employees List';
  employees: any[] = [
      {
          "empId": 1,
          "name": "Ram",
          "location": "Bangalore"
      },
      {
          "empId": 2,
          "name": "Raj",
          "location": "Chennai"
      },
      {
          "empId": 3,
          "name": "Vinay",
          "location": "Pune"
      }
  ];
}
