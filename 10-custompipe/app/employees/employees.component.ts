import { Component } from '@angular/core';

@Component({
  selector: 'my-emp',
  templateUrl: 'app/employees/employees.component.html'
})
export class EmployeesComponent {
  title: string = 'Employees List';
  nameFilter: string = '';
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
