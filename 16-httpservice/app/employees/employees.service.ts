import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {
    private _employeesUrl = "app/employees/employees.json";

    constructor (private _http: Http) { }

    getEmployees() {
        return this._http.get(this._employeesUrl).map((response) => response.json());
    }
}
