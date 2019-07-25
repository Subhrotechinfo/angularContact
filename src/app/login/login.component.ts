import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder, private service: HttpService, private toast: AlertService, private auth: UserService, private route: Router) {
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  onSubmit(){
    // console.log(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.invalid) { return ;}
    this.service.postData('login', this.loginForm.value)
      .subscribe((res) => {
        if(res.success == true){
            this.auth.saveInLocalStorage(res.data);
            this.route.navigate(['/dashboard/userProfile']);
            this.toast.successtoast('Login Success');
        } else {
            this.toast.errortoast('Login Error');
        }
        // console.log(res);
      })





  }
  get controls(){
    return this.loginForm.controls;
  }
}
