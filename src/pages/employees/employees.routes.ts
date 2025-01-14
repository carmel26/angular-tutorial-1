import { Component } from "@angular/core";
import { Routes } from "@angular/router";

export const routes: Routes = [
  {path: 'list', component: EmployeeListComponent},
  {path: 'detail/:id', component: EmployeeDetailComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: 'edit/:id', component: EditEmployeeComponent},
];
