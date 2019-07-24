import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ShowContactComponent } from './contact/show-contact/show-contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';


const routes: Routes = [
  { path: '', redirectTo: 'showList', pathMatch: 'full' },
  { path: 'userProfile', component: UserprofileComponent },
  { path: 'addContact', component: AddContactComponent },
  { path: 'showList', component: ShowContactComponent }
];


@NgModule({
  declarations: [
    UserprofileComponent,
    AddContactComponent,
    ShowContactComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  providers: [NgbActiveModal]
})
export class DashboardModule { }
