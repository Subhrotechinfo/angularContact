import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserAuthenticated() {
    return (localStorage.getItem('token')) ? true : (sessionStorage.getItem('token')) ? true : false;
  }

  saveInLocalStorage(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('_id', data._id);
    localStorage.setItem('type', 'local');
  }

  saveInSessionStorage(data) {
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('_id', data._id);
  }

  logout() {
    if (localStorage.getItem('type')) {
      localStorage.removeItem('token');
      localStorage.removeItem('_id');
      return;
    }
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('_id');
  }

  getData(key: string) {
    if (localStorage.getItem('type')) {
      return localStorage.getItem(key);
    }
    return sessionStorage.getItem(key);
  }
}