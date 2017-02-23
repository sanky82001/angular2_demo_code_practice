import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EmployeesComponent }  from './employees/employees.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, EmployeesComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
