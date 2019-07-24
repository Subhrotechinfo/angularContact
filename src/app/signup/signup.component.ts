import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signuForm: FormGroup;
  submitted: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signuForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  onSubmit() {
    console.log(this.controls);

    this.submitted = true;
    if (this.signuForm.invalid) { return }
  }
  get controls() {
    return this.signuForm.controls;
  }

}
