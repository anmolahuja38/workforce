import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from 'src/app/common/Employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private _employeeServiceService : EmployeeServiceService) { }

  ngOnInit(): void {
  }

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailAddress: new FormControl(''),
    avatarLink: new FormControl('')
  });

  imgLink : string;
  employee : Employee;

  onSubmit() {
    console.warn(this.employeeForm.value);

    this.employee={
      id: this._employeeServiceService.getListOfEmployees().length+1,
      email: this.employeeForm.get('emailAddress').value,
      first_name: this.employeeForm.get('firstName').value,
      last_name: this.employeeForm.get('lastName').value,
      avatar: this.employeeForm.get('avatarLink').value
   }

   console.log(this.employee);

   this._employeeServiceService.addEmployee(this.employee);

   console.log(this._employeeServiceService.getListOfEmployees());
   
   
  }

}
