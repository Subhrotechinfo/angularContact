import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  addContact: FormGroup
  submitted: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addContact = this.fb.group({
      contactName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9 ]*')]]
    });
  }
  onSubmit(){
    console.log(this.addContact.value);
    this.submitted = true;
    if (this.addContact.invalid) { return ;}


  }
  get controls() {
    return this.addContact.controls;
  }

}
