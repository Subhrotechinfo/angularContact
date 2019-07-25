import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted: boolean;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.signupForm  = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(){
      console.log(this.signupForm.value);
      this.submitted = true;
      if (this.signupForm.invalid) { return; }
  }
  get controls() {
    return this.signupForm.controls;
  }
}
