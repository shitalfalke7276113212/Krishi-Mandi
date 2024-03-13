import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(private route:Router){}
ngOnInit(): void {
this.route.events.subscribe((val:any)=>{
  if(val.url){
    if(localStorage.getItem('Sign In') &&
     val.url.includes('username, password')){
      console.warn("Logged In")
     }else{
      console.warn("outside")
     }
  }
})
}
}
