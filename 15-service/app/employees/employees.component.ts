import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'my-emp',
  templateUrl: 'app/employees/employees.component.html'
})
export class EmployeesComponent {
  title: string = 'Employees List';
  employees: any[];
  
  constructor(private _employeesService: EmployeesService) { }

  ngOnInit() {
    this.employees = this._employeesService.getEmployees();
  }
}
