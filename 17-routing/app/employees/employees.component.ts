import { Component } from '@angular/core';

@Component({
  selector: 'my-emp',
  templateUrl: 'app/employees/employees.component.html'
})
export class EmployeesComponent {
  title: string = 'Employees List';
  employees = [
    {
      "id": 1,
      "name": "Ram"
    },
    {
      "id": 2,
      "name": "Raj"
    },
    {
      "id": 3,
      "name": "Vinay"
    }
  ];
}
