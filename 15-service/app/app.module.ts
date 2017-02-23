import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesService } from './employees/employees.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, EmployeesComponent ],
  providers: [ EmployeesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
