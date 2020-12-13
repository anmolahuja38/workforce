import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeServiceService } from './services/employee-service.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  { path: 'employee', component: ListEmployeeComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'employee/:id', component: ViewEmployeeComponent },
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    PageNotFoundComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    EmployeeServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
