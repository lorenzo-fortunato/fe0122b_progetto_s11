import { Component, OnInit } from '@angular/core';
import { ServiceService } from './auth/service.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Netflox</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            [routerLink]="['/']"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >Film</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            [routerLink]="['/profili']"
            routerLinkActive="active"
            >Profili</a
          >
        </li>
        <li class="nav-item">
          <button (click)="logout()" class="btn btn-warning">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private srv: ServiceService) { }

  ngOnInit(): void {
  }

  logout() {
    this.srv.logout()
  }
}
