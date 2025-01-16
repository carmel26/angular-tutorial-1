import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login.component';
import { EmployeeService } from '../services/employee.service';

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registration', loadComponent: () => {
    return import('../pages/registration.component').then(
      (m) => m.RegistrationComponent
    );
  }},
  {path: 'employees',
    providers: [EmployeeService],
    loadChildren: () => {
    return import('../pages/employees/employees.routes').then(
      (m) => m.routes
    );
  }}
];
console.log('Routes configuration:', routes);
