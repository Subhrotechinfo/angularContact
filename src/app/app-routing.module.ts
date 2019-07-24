import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './dashboard/userprofile/userprofile.component';
import { AddContactComponent } from './dashboard/contact/add-contact/add-contact.component';
import { ShowContactComponent } from './dashboard/contact/show-contact/show-contact.component';


const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path: 'dashboard/userProfile', component:UserprofileComponent},
  {path: 'dashboard/addContact', component: AddContactComponent},
  {path:'dashboard/showList', component:ShowContactComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
