import { AlertService } from 'src/app/services/alert.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/services/user-auth.service';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit {
  loggedInUserToken;
  showContactDetails:any ;
  user_Id;

  updateContact :  FormGroup
  constructor(
    private fb: FormBuilder,
    private auth: UserService,
    private service: HttpService,
    private toast: AlertService,
    private route: Router) {
      this.updateContact = this.fb.group({
      'name': [''],
      'mobile': [''],
      '_id': [''],
      'userId': ['']
    });
      this.loggedInUserToken = this.auth.getData('token');

     }

  ngOnInit() {
    this.service.fetchData('getAllContacts', this.loggedInUserToken)
      .subscribe((res) => {
        this.showContactDetails = res.data;
          console.log(res);
      });
  }
  onEdit(data) {
    console.log(data);
    this.updateContact = this.fb.group({
      'name': [ data.name ],
      'mobile': [ data.mobile],
      '_id': [data._id],
      'userId':[data.userId]
    });
  }
  onSubmit(){
    console.log('Submitted', this.updateContact.value);
    this.service.putData('singleUpdate', this.updateContact.value, this.loggedInUserToken)
      .subscribe((res)=>{
        console.log(res);
        if(res.success ==true ){
          this.toast.successtoast(res.msg);
        }else {
          this.toast.errortoast('Not updated');
        }
      });
  }
  onDelete(_id){
    console.log(_id);
    this.user_Id = _id;
  }
  deleteRequest() {
    console.log('Delete Ready');
    this.service.postData('deleteSingleContact', {'_id':this.user_Id})
      .subscribe((res) => {
        console.log(res);
      });
  }

}
