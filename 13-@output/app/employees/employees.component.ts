import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-emp',
  templateUrl: 'app/employees/employees.component.html',
  styleUrls: ['app/employees/employees.component.css']
})
export class EmployeesComponent {
  title: string = 'Employees List';
  employees = [
    {
      "id": 1,
      "name": "Ram",
      "selected": false
    },
    {
      "id": 2,
      "name": "Raj",
      "selected": false
    },
    {
      "id": 3,
      "name": "Vinay",
      "selected": false
    }
  ];
  @Output() itemClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(item: any) {
    for (let i=0; i < this.employees.length; i++)
      this.employees[i].selected = false;
    this.employees[item.id - 1].selected = true;
    this.itemClicked.emit(item.name);
  } 
}
