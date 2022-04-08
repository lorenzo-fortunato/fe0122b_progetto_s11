import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { FilmComponent } from './component/film/film.component';
import { HttpClientModule } from '@angular/common/http';
import { GuardGuard } from './auth/guard.guard';
import { ProfiliComponent } from './component/profili/profili.component';
import { CardComponent } from './component/card/card.component';
// import { LoginComponent } from './auth/components/login/login.component';
// import { RegistrationComponent } from './auth/components/registration/registration.component';

const routes: Route[] = [
  { path: "", component: FilmComponent, canActivate:[GuardGuard] },
  { path: "profili", component: ProfiliComponent, canActivate:[GuardGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmComponent,
    ProfiliComponent,
    CardComponent,
    // LoginComponent,
    // RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AuthModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
