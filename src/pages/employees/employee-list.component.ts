import { AsyncPipe, NgComponentOutlet, NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";

@Component({
  selector: "app-employee-list",
  template: ` <h2>Employee List</h2>
              <table>
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Position</th>
                    <th>Action</th>
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
  `,
  standalone : true,
  imports : [AsyncPipe, NgFor, NgIf, NgComponentOutlet],
})
export class EmployeeListComponent {
  employees$;
  isConfirmationOpen = false;
  confirmDialog: any = null;

  constructor(private readonly employeeService: EmployeeService){
    this.employees$ = this.employeeService.getEmployees();
  }

  async showConfirmationDialog(){
    this.confirmDialog = await import(
      '../../app/shared/components/confirmation-dialog.component'
    ).then((m) => m.ConfirmationDialogComponent);
    this.isConfirmationOpen = true;
  }
}
