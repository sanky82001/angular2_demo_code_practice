import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }  from './app.routing';

import {AboutComponent} from './about/about.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee.component';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, AboutComponent, EmployeesComponent, EmployeeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
