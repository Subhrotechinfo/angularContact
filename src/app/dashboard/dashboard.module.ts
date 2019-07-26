import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ShowContactComponent } from './contact/show-contact/show-contact.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { DashboardGuard } from '../services/dashboardguard.service';
const routes: Routes = [
  {path: '' , redirectTo: 'userProfile', pathMatch: 'full'},
  {path: 'userProfile', component: UserprofileComponent , canActivate:[DashboardGuard]},
  {path: 'addContact', component: AddContactComponent , canActivate:[DashboardGuard]},
  {path: 'showList', component: ShowContactComponent , canActivate:[DashboardGuard]}
]

@NgModule({
  declarations: [AddContactComponent, ShowContactComponent, UserprofileComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatDialogModule
  ],
  exports: [RouterModule],
  providers: [NgbActiveModal]
})
export class DashboardModule { }


