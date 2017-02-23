import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesService {
    getEmployees(): any[] {
        return [
            {
                "id": 1,
                "name": "Ram",
            },
            {
                "id": 2,
                "name": "Raj",
            },
            {
                "id": 3,
                "name": "Vinay",
            }
        ];
    }
}
