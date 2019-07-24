import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  submitted: boolean;
  profile: FormGroup;
  editable: boolean;
  constructor(private fb: FormBuilder, private modalService: NgbModal) { }
  ngOnInit() {

    this.profile = this.fb.group({
      name: ['User Name', Validators.required],
      email: ['abc@gami.com', Validators.required],
      password: ['']
    });
  }

  formInit() {

  }
  editToggle(content) {
    this.editable = !this.editable;
  }

  onSubmit() {
    this.submitted = true;
    if (this.profile.invalid) { return; }
  }

}
