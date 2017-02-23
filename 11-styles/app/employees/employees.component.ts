import { Component } from '@angular/core';

@Component({
  selector: 'my-emp',
  templateUrl: 'app/employees/employees.component.html',
  styles: ['li {color: red;}'],
  styleUrls: ['app/employees/employees.component.css'] 
})
export class EmployeesComponent {
  title: string = 'Employees List';
}
