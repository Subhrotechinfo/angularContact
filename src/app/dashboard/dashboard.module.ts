import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ShowContactComponent } from './contact/show-contact/show-contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { Dashboardguard } from '../services/dashboardguard.service';


const routes: Routes = [
  { path: '', redirectTo: 'showList', pathMatch: 'full' },
  { path: 'userProfile', component: UserprofileComponent, canActivate: [Dashboardguard] },
  { path: 'addContact', component: AddContactComponent, canActivate: [Dashboardguard] },
  { path: 'showList', component: ShowContactComponent, canActivate: [Dashboardguard] }
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
