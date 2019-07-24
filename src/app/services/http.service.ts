import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getData(url: string, data?: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}${url}`, data);
  }
  postData(url: string, data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}${url}`, data);
  }
  putData(url: string, data: any): Observable<any> {
    console.log(data);
    return this.httpClient.put(`${this.baseUrl}${url}`, data);
  }
  deleteData(url: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}${url}`);
  }
}