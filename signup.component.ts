/*import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { ClientregistrationComponent } from '../clientregistration/clientregistration.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  addvnmForm: FormGroup;
 submitted = false;
  //@ViewChild(ClientregistrationComponent) view!:ClientregistrationComponent
  name:any;
  mobile:any;
  


 constructor(public fb: FormBuilder,private router:Router ,private route: Router) {}
   ngOnInit(): void {
    this.addvnmForm = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required,Validators.minLength(10)]],

   
    });
  
  }
  
get f() { return this.addvnmForm.controls; }
 TransferData( ){
   this.submitted = true;
    //if (this.addvnmForm.invalid) {
    //  return;
 //  }
//else{
 // this.router.navigate(['clientregistration']);


 //this.inputcname=cname;
 // this.inputmobile=mobile;
  //this.router.navigate(['clientregistration']);
//}
if (this.addvnmForm.invalid) {
   return;
 }
 else{
this.route.navigate(['clientregistration'],{queryParams:{data:this.name ,data1:this.mobile }},
 )
 }
}
   
 // submit(){
  //  this.submitted = true;
   // if (this.addvnmForm.invalid) {
    //  return;
   // }
   // else{
    //  this.router.navigate(['clientregistration']);
    //}
  //}
 /* login(){
    this.router.navigate(['login']);

  }*/
/* numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}

function TransferData(mobile: any, any: any, name: void, any1: any) {
  throw new Error('Function not implemented.');
}*/
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
//import { UserService } from 'src/app/service/user.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;
  conversionEncryptOutput: string;
  mobile:any;
  name:any;



  constructor(private userService: UserService,
    public fb: FormBuilder, private router: Router, private route: Router) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],


    });
  }
  get f() { return this.signupForm.controls; }
  convertText(conversion:string) {
    if (conversion=="encrypt") {
      this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.signupForm.value.name.trim(), this.signupForm.value.mobile.trim()).toString();
    }
  
}
  submit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    else {
      this.userService.clientRegistration(this.signupForm.value).subscribe(res => {
      localStorage.setItem("token", res);
     // this.router.navigate(['clientregistration']);
      this.route.navigate(['clientregistration'],{queryParams:{data:this.name ,data1:this.mobile }},

      )}
      );
    }
 
  }
 login() {
     this.router.navigate(['login']);


  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}


