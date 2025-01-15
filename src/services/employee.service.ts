import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable()
export class EmployeeService{
  getEmployees(){
    return of([
      { name: 'John', lastname: 'Bien', position: 'Developer' },
      { name: 'Jane', lastname: 'Smith', position: 'Manager' }

    ]);
  }
}
