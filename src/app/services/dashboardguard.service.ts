import { UserService } from './user-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class Dashboardguard implements CanActivate {

  constructor(private userService: UserService, private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.userService.isUserAuthenticated()) {
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
}
