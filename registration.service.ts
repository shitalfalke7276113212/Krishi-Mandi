import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  isClientregistrationLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }
  // userSignUp(data){
  //   this.http.post('http://localhost:3000/clientregistration',
  //   data,
  //   {observe:'response'}).subscribe((result)=>{
  //     console.warn(result)
  //     if(result){
  //       localStorage.setItem('clientregistration',JSON.stringify(result.body))
  //       this.router.navigate(['home'])
  //     }
  //   })
  // } 
  // reloadClientregistration(){
  //   if(localStorage.getItem('clientregistration')){
  //     this.isClientregistrationLoggedIn.next(true)
  //     this.router.navigate(['home'])
  //   }
  // }
  // userLogin(data:login){
  //  this.http.get(`http://localhost:3000/clientregistration?email=${data.username}&password=${data.password}`,
  //  {observe:'response'}).subscribe((result:any)=>{
  //   console.warn(result)
  //   if(result && result.body && result.body.length===1){
  //     this.isLoginError.emit(false)
  //     localStorage.setItem('clientregistration',JSON.stringify(result.body))
  //     this.router.navigate(['home'])
  //   }else{
  //     console.warn("login failed");
  //     this.isLoginError.emit(true)
  //   }
  //  })
  // }
}