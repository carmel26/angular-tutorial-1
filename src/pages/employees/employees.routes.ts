import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { EmployeeListComponent } from "./employee-list.component";
import { EmployeeDetailComponent } from "./employee-detail.component";
import { CreateEmployeeComponent } from "./employee-create.component";
import { EditEmployeeComponent } from "./employee-edit.component";

export const routes: Routes = [
  {path: 'list', component: EmployeeListComponent},
  {path: 'detail/:id', component: EmployeeDetailComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: 'edit/:id', component: EditEmployeeComponent},
];
