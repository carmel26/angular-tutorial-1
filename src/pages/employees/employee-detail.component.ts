import { Component } from "@angular/core";
import Employee from "../../utils/Employee";


@Component({
  selector: "app-employee-detail",
  template: `
     <div>
      <h2>Employee Detail: </h2>
      <p> Name: {{employee.firstname}}</p>
      <p> Lastname: {{employee.lastname}}</p>
      <p> Position: {{employee.position}}</p>
     </div>
  `,
  standalone : true,
})
export class EmployeeDetailComponent {
  employee: any;
  constructor(employee : Employee) {}
}
