import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  submitted: boolean;
  profile: FormGroup;
  editable: boolean = false;
  loggedInUserId;
  loggedInUserToken;
  constructor(private fb: FormBuilder, private service: HttpService, private toast: AlertService, private auth: UserService) {
    this.profile = this.fb.group({
        name: ['', Validators.required],
        emailId: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.loggedInUserId = this.auth.getData('userId');
    this.loggedInUserToken = this.auth.getData('token');

    // console.log('constructor', this.userid);
    // console.log('', this.service.getdata)
   }

  ngOnInit() {
    console.log(this.profile);
    this.service.fetchData('getUserDetail', this.loggedInUserToken, '')
      .subscribe((res) => {
          console.log(res);
          if(res.success == true) {
            //success set the values
            this.profile = this.fb.group({
              name: [res.data.name],
              emailId: [res.data.emailId],
              password: ['']
          });

            this.toast.infotoast('Data Fetched');
          } else {
            //error
            this.toast.errortoast('Unable to fetch data / invalid token');
          }
      });
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
  onSaveChanges() {
    //save updated changes
      console.log('updated changes', this.profile.value );
      this.service.putData('updateUserProfile', this.profile.value, this.loggedInUserToken)
        .subscribe((res) => {
          console.log(res);
          if(res.success == true){
              this.toast.infotoast(res.msg);
              this.editable = false;
          } else {
              this.toast.errortoast('Error');
              this.editable = false;
          }
        });
  }
}
