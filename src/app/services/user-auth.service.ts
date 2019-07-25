import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private route: Router) { }
  isAuthenticated(){
    return (localStorage.getItem('token')) ? true : (sessionStorage.getItem('token')) ? true : false;
  }
  saveInLocalStorage(data){
    console.log(data.token)
    // console.log(data.userId);
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('type', 'local');
  }
  saveInSessionStorage(data){
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('_id', data.userId);
  }
  logout() {
    if(localStorage.getItem('type')){
        localStorage.removeItem('token');
        localStorage.removeItem('_id');
        this.route.navigate(['/login']);
        return ;
    }
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('_id');
    this.route.navigate(['/login'])
  }
  getData(key: string) {
    if (localStorage.getItem('type')) {
      return localStorage.getItem(key);
    }
    return sessionStorage.getItem(key);
  }

}

