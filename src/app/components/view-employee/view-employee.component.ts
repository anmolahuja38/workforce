import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/common/Employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _employeeServiceService: EmployeeServiceService,
    private _router: Router,
    private _toastr: ToastrService) { }


  employee: Employee = new Employee();


  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
      this.getEmployeeDetail()
    })
  }

  getEmployeeDetail() {
    const id: number = +this._activatedRoute.snapshot.paramMap.get('id');
    this.employee = this._employeeServiceService.getEmployeeDetails(id);
  }

  removeEmployee() {
    this._employeeServiceService.removeEmployee(this.employee.id);
    this._toastr.success(this.employee.first_name + ' ' + this.employee.last_name, 'Employee Removed');
    this._router.navigate(['employee']);
  }

  updateEmployee(firstName : string,lastName : string,email : string) {
    let index = this._employeeServiceService.employees.indexOf(this.employee);
    this.employee.first_name=firstName;
    this.employee.last_name=lastName;
    this.employee.email=email;

    this._employeeServiceService.employees[index]=this.employee;
    this._toastr.success('Employee Updated');
    this._router.navigate(['employee']);
  }

}
