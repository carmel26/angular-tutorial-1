import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../services/login.service";

@Component({
  selector : 'app-login',
  template : `
  <div class="login-container">
    <h1>Login</h1>
    <form>
      <input type="text" name="email" placeholder="Email"
      [(ngModel)] = "credential.email">
      <input type="password" name="password" placeholder="Password"
      [(ngModel)]="credential.password">
      <button type="Submit">Login</button>
    </form>
    <span class="warning" *ngIf="!credential.email || !credential.email" >
      Please fill in all the requiered fields
    </span>
  </div>
  `,
  standalone : true,
  imports : [FormsModule, NgIf],
  providers: [AuthService]
})

export class LoginComponent {
  credential = {email : '', password : ''};
  constructor(private auth: AuthService){}
  submit() {
    if(this.credential.email && this.credential.password){
      this.auth.login(this.credential).subscribe();
    }
  }
}
