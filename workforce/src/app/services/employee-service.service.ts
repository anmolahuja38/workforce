import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../common/Employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClient: HttpClient) { }

  configUrl = 'assets/employee.json';

  getListOfEmployees(): Observable<Employee[]> {
    return this.httpClient.get<GetResponseEmployee>(this.configUrl).pipe(
      map(response => response.body)
    );
  }
}

interface GetResponseEmployee {
  body: Employee[]
}
