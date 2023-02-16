import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/common/Employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private _employeeServiceService: EmployeeServiceService,
    private _router: Router,
    private _toastr: ToastrService) { }

  ngOnInit(): void {
  }

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailAddress: new FormControl(''),
    avatarLink: new FormControl('')
  });

  imgLink: string;
  employee: Employee;

  onSubmit() {
    this.employee = {
      id: this._employeeServiceService.getListOfEmployees().length + 1,
      email: this.employeeForm.get('emailAddress').value,
      first_name: this.employeeForm.get('firstName').value,
      last_name: this.employeeForm.get('lastName').value,
      avatar: this.employeeForm.get('avatarLink').value
    }
    this._employeeServiceService.addEmployee(this.employee);
    this._toastr.success(this.employeeForm.get('firstName').value + ' ' + this.employeeForm.get('lastName').value, 'Employee Added');
    this._router.navigate(['employee']);
  }

}
