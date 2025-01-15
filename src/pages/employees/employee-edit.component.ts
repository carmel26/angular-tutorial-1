import { Component } from "@angular/core";

@Component({
  selector: "app-employee-edit",
  template : `
  <div class="container">
    <h2>Edit Employee</h2>
    <form (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="firstname">Name:</label>
        <input type="text" id="firstname" name="firstname" required>
      </div>
      <div class="form-group">
        <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname" required>
      </div>
      <div class="form-group">
        <label for="position">Position:</label>
        <input type="text" id="position" name="position" required>
      </div>
      <button type="submit">Submit</button>

  `,
  standalone : true,
})
export class EditEmployeeComponent {
  constructor() {}
  onSubmit() {
    console.log("Form submitted Thanks");
  }
}
