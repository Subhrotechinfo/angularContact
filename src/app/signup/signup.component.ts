import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ HttpService ]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted: boolean;


  constructor(private fb: FormBuilder, private service: HttpService, private route: Router, private alert: AlertService) {
  }

  ngOnInit() {
    this.signupForm  = this.fb.group({
      name: ['', Validators.required],
      emailId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
      console.log(this.signupForm.value);
      this.submitted = true;
      if (this.signupForm.invalid) { return; }

      this.service.postData('signup', this.signupForm.value)
        .subscribe((res)=>{
          if(res.success == true){
              this.alert.successtoast('SuccessFully Signed up');
              this.route.navigate(['/login']);
          } else {
            this.alert.successtoast('Sign Up Failed');
          }
          console.log('Signin', res);
        });


  }
  get controls() {
    return this.signupForm.controls;
  }
}
