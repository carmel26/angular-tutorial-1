import { AsyncPipe, NgComponentOutlet, NgFor, NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";

@Component({
  selector: "app-employee-list",
  template: ` <h2>Employee List</h2>
              <table>
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Position</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let employee of employees$ | async">
                    <td>{{employee.name}} {{employee.lastname}}</td>
                    <td>{{employee.position}}</td>
                    <td> <button (click)="showConfirmationDialog()">Delete</button> </td>
                  </tr>
                </tbody>
              </table>
              <<ng-container *ngComponentOutlet="confirmDialog"></ng-container>

  `,
  standalone : true,
  imports : [AsyncPipe, NgFor, NgIf, NgComponentOutlet],
})
export class EmployeeListComponent {
  employeeService = inject(EmployeeService);
  employees$ = this.employeeService.getEmployees();
  isConfirmationOpen = false;
  confirmDialog: any = null;


  async showConfirmationDialog(){
    this.confirmDialog = await import(
      '../../app/shared/components/confirmation-dialog.component'
    ).then((m) => m.ConfirmationDialogComponent);
    this.isConfirmationOpen = true;
  }
}
