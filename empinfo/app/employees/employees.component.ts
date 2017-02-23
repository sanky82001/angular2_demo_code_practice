import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "./employees.service";

@Component({
  selector: 'app-employees',
  templateUrl: 'app/employees/employees.component.html',
  styleUrls: ['app/employees/employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any[];

  constructor(private _employeeService: EmployeesService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    console.log(this.employees);
  }

  deleteEmployee(empid: any) {
    this._employeeService.deleteEmployee(empid);
    this.employees = this._employeeService.getEmployees();
  }
}
