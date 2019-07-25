import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import { UserService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {

  constructor(private service: UserService, private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean{
    if(this.service.isAuthenticated()) {
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
}
