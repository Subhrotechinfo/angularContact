import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  exports: [
    NavbarComponent,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule]
})
export class ShareModule { }
