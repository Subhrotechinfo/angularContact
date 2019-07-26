import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private toast: AlertService, private auth: UserService) { }

  ngOnInit() {
  }

  logout() {
     console.log('Logout clicked');
      this.auth.logout();
  }

}
