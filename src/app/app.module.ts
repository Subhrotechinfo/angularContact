import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from './shared/shared.module';
import { HttpService } from './services/http.service';
import { DashboardGuard } from './services/dashboardguard.service';
import { DashboardModule } from './dashboard/dashboard.module';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    HttpClientModule
  ],
  providers: [HttpService, DashboardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
