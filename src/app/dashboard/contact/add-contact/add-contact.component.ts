import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-auth.service';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  addContact: FormGroup
  submitted: boolean;
  loggedInUserToken;
  constructor(private fb: FormBuilder,
    private auth: UserService,
    private service: HttpService,
    private toast: AlertService,
    private route: Router) {
    this.loggedInUserToken = this.auth.getData('token');
   }

  ngOnInit() {
    this.addContact = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10,}')]]
    });
  }
  onSubmit(){
    console.log(this.addContact.value);
    this.submitted = true;
    if (this.addContact.invalid) { return ;}
    this.service.fetchData('addContact', this.loggedInUserToken, this.addContact.value)
      .subscribe((res) => {
        if(res.success == true){
            this.toast.infotoast(res.msg);
            this.route.navigate(['dashboard/showList']);
        } else {
            this.toast.errortoast('Not updated');
        }
      });

  }
  get controls() {
    return this.addContact.controls;
  }

}
