import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'my-emp',
  templateUrl: 'app/employees/employees.component.html'
})
export class EmployeesComponent {
  title: string = 'Employees List';
  employees: Employee[];

  constructor(private _employeesService: EmployeesService) {
  }

  ngOnInit() {
    this._employeesService.getEmployees().subscribe(employees => this.employees = employees);
  }
}
