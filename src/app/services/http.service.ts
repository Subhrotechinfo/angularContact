import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl;
  constructor(private _httpClient: HttpClient) { }

  postData(url: string, data: any): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}/${url}`, data);
  }
  putData(url: string, data: any): Observable<any>{
    return this._httpClient.put(`${this.baseUrl}${url}`, data);
  }

  getdata(url: string, data?: any): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}${url}`, data);
  }
  deleteData(url: string, data: any): Observable<any> {
    return this._httpClient.delete(`${this.baseUrl}${url}`, data);
  }

}

