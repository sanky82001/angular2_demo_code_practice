import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesService } from './employees/employees.service';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, EmployeesComponent ],
  providers: [ EmployeesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
