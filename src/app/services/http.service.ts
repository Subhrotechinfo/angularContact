import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl;
  constructor(private _httpClient: HttpClient) { }

  postData(url: string, data: any): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}${url}`, data);
  }
  putData(url: string, data: any, token?: string ): Observable<any> {
     let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorizations': token });
     let options = { headers: headers };
     console.log('url', url, 'data', data);
     return this._httpClient.put(`${this.baseUrl}${url}`, data, options);
  }

  getdata(url: string, data?: any): Observable<any> {

    return this._httpClient.get(`${this.baseUrl}${url}`, data);
  }
  deleteData(url: string, data: any, token?: string): Observable<any> {

    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorizations': token });

    // let options = { headers: headers };

    return this._httpClient.post(`${this.baseUrl}${url}`, data);
  }
  fetchData(url: string, token: string, data?: any): Observable<any> {
    console.log(token,'-->', data);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorizations': token });
    let options = { headers: headers };

    return this._httpClient.post(`${this.baseUrl}${url}`, data, options);
  }

}

