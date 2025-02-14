import { AsyncPipe, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { isAuth } from "../auth";
import { Component } from "@angular/core";


@Component({
  selector: 'app-footer',
  template: `
  <div>
    <h2>HRMS</h2>
    <p>Welcome to HRMS platform!</p>
    <div class="links">
      Follow us on social media:
      <a href="https://linkedin.com" target="_blank"> LinkedIn</a>
      <a href="https://x.com" target="_blank"> X (former Twitter) </a>
    </div>
    <div *ngIf = "isAuth$ | async" class="legal">
      <a routerLink="/terms">Terms of Service</a>
      <a routeLink="/privacy">Privacy Policy</a>
      <a routeLink="/cookies">Cookies Policy</a>
    </div>
  </div>
      `,
    standalone : true,
    imports: [AsyncPipe, NgIf, RouterLink],
})
export class FooterComponent {
  isAuth$ = isAuth();// inject the isAuth function
}
