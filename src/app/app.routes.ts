import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', loadComponent: () => {
    return import('../pages/registration.component').then(
      (m) => m.RegistrationComponent
    );
  }},
  {path: 'employees', loadChildren: () => {
    return import('../pages/employees/employees.routes').then(
      (m) => m.routes
    );
  }}
];
console.log('Routes configuration:', routes);g
