import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  submitted: boolean;
  profile: FormGroup;
  editable: boolean = false;

  constructor(private fb: FormBuilder) {
    this.profile = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

   }

  ngOnInit() {
  }

  editToggle() {
    console.log('editToggle');
    this.editable = true;
  }
  onSubmit() {
    console.log('On Submit')
  }
  cancelToggle(){
    this.editable = false;
  }
}
