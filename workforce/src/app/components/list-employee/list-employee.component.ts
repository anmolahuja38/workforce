import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/Employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
    selector: 'app-list-employee',
    templateUrl: './list-employee.component.html',
    styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

    constructor(private _employeeServiceService: EmployeeServiceService) { }

    ngOnInit(): void {

        this.getEmployeeList();
    }


    employees: Employee[];
    p: number = 1;

    getEmployeeList() {
        this.employees=this._employeeServiceService.employees;
    }
}
