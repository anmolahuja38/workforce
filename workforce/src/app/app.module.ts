import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';


const routes: Routes = [
  { path: 'employee', component: ListEmployeeComponent },
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
