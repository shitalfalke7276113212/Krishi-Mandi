import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Links } from './links.module';
import { login } from '../data-type';
import { Observable } from 'rxjs/internal/Observable';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=UTF-8',
    Authorization: 'www.e-krishimandi.com'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  [x: string]: any;
  constructor(private http: HttpClient, ) { }
  signup(form: any) {
    return this.http.post(Links.signup, form,httpOptions)
      .pipe(map((response: any) => response));
  }
  auction(data: any) {
    return this.http.post(Links.auction, data,httpOptions)
      .pipe(map((response: any) => response));
  }
  circular() {
    return this.http.post(Links.circular,httpOptions)
      .pipe(map((response: any) => response));
  }
  clientRegistration(data){
    console.log(data);
    
    return this.http.post(Links.client,data,httpOptions)
    .pipe(map((response: any) => response));
  } 
}

