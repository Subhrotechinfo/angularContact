import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ShowContactComponent } from './contact/show-contact/show-contact.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
const routes: Routes = [
  {path: '' , redirectTo: 'userProfile', pathMatch: 'full'},
  {path: 'userProfile', component: UserprofileComponent },
  {path: 'addContact', component: AddContactComponent},
  {path: 'showList', component: ShowContactComponent}
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


