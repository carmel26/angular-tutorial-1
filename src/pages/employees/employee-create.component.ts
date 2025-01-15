import { Component } from "@angular/core";

@Component({
  selector: "app-employee-create",
  template: `
    <div class = "container">
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="firstname">Name:</label>
          <input type="text" id="firstname" name="firstname" required>
        </div>
        <div class="form-group">
          <label for="lastname">Lastname:</label>
          <input type="text" id="lastname" name="lastname" required>
        </div>
        <div class="form-group">
          <label for="position">Position:</label>
          <input type="text" id="position" name="position" required>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    `,
  standalone : true,
})
export class CreateEmployeeComponent {
  constructor() {}
  onSubmit() {
    console.log("Form submitted Thanks");
  }
}
