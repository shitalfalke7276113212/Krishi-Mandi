/*import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  [x: string]: any;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }
  ngOnInit(): void {


    this.LoginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6),
      Validators.pattern('[a-zA-Z0-9-.!#$%&*^_:]*')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25),
      ]],
    })
  }
  login() {
    this.http.get<any>("http://localhost:3000/clientregistration").subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === this.LoginForm.value.username && a.password === this.LoginForm.value.password
      })

      if (user) {
        alert("login successful");
        this.LoginForm.reset();
        this.router.navigate(['auctionfloor'])
      } else {
        alert("user not found");
      }
    }, err => {
      alert("user is not found, server side")
    }
    )
  }


}







function login() {
  throw new Error('Function not implemented.');
}*/

/*import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
//import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  [x: string]: any;
  LoginForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient,private userService:UserService) { }
  ngOnInit(): void {


    this.LoginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6),
      //Validators.pattern('[a-zA-Z0-9-.!#$%&*^_:]*')
    ]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25),
      ]],
    })
  }
  login() {
    this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
    }
    else {
        this.http.get<any>("http://localhost:3000/clientregistration").subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === this.LoginForm.value.username && a.password === this.LoginForm.value.password
      })
            if (user) {
              alert("login successful");
              this.LoginForm.reset();
              this.router.navigate(['auctionfloor'])
            } else {
              alert("Invalid combination of user name & password");
            }
            
    }
 

  //   this.http.get<any>("http://localhost:3000/clientregistration").subscribe(res => {
  //     const user = res.find((a: any) => {
  //       return a.username === this.LoginForm.value.username && a.password === this.LoginForm.value.password
  //     })

  //     if (user) {
  //       alert("login successful");
  //       this.LoginForm.reset();
  //       this.router.navigate(['auctionfloor'])
  //     } else {
  //       alert("user not found");
  //     }
  //   }, err => {
  //     alert("user is not found, server side")
  //   }
     )

}


}


}*/

/****************************************************************** */

/*import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  [x: string]: any;
  LoginForm: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient,private userService:UserService) { }
  ngOnInit(): void {


    this.LoginForm = this.fb.group({
      recaptcha: ['', Validators.required],
      captcha: [null, Validators.required],
      username: ['', [Validators.required, Validators.minLength(6),
   

      //Validators.pattern('[a-zA-Z0-9-.!#$%&*^_:]*')
    ]],
    
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25),
      
      ]],
      
    })
  }
  login() {
    this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
    }
    else {
        this.http.get<any>("http://localhost:3000/clientregistration").subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === this.LoginForm.value.username && a.password === this.LoginForm.value.password
      })
            if (user) {
              alert("login successful");
              this.LoginForm.reset();
              this.router.navigate(['auctionfloor'])
            } else {
              alert("Invalid combination of user name & password");
            }
            
    }
 

  //   this.http.get<any>("http://localhost:3000/clientregistration").subscribe(res => {
  //     const user = res.find((a: any) => {
  //       return a.username === this.LoginForm.value.username && a.password === this.LoginForm.value.password
  //     })

  //     if (user) {
  //       alert("login successful");
  //       this.LoginForm.reset();
  //       this.router.navigate(['auctionfloor'])
  //     } else {
  //       alert("user not found");
  //     }
  //   }, err => {
  //     alert("user is not found, server side")
  //   }
     )

}


}
onSubmit() {
  console.log(this.LoginForm.controls);
}

handleSuccess(e) {
  console.log("ReCaptcha", e);
}

}*/
////////////////////////////////////////////////////////////////////////////

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  [x: string]: any;
  LoginForm: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder, private router: Router,
     private http: HttpClient,private userService:UserService) { }
  ngOnInit(): void {


    this.LoginForm = this.fb.group({
      recaptcha: ['', Validators.required],
      captcha: [null, Validators.required],
      username: ['', [Validators.required, Validators.minLength(6),
   

      //Validators.pattern('[a-zA-Z0-9-.!#$%&*^_:]*')
    ]],
    
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25),
      
      ]],
      
    })
  }
  login() {
    this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
    }
    else {
        this.http.get<any>("http://localhost:3000/clientregistration").subscribe(res => {
      const user = res.find((a: any) => {
        return a.name === this.LoginForm.value.username && a.mobile === this.LoginForm.value.password
      })
            if (user) {
              alert("login successful");
              this.LoginForm.reset();
              this.router.navigate(['auctionfloor'])
            } else {
              alert("Invalid combination of user name & password");
            }
            
    }
 

  //   this.http.get<any>("http://localhost:3000/clientregistration").subscribe(res => {
  //     const user = res.find((a: any) => {
  //       return a.username === this.LoginForm.value.username && a.password === this.LoginForm.value.password
  //     })

  //     if (user) {
  //       alert("login successful");
  //       this.LoginForm.reset();
  //       this.router.navigate(['auctionfloor'])
  //     } else {
  //       alert("user not found");
  //     }
  //   }, err => {
  //     alert("user is not found, server side")
  //   }
     )

}


}
onSubmit() {
  console.log(this.LoginForm.controls);
}

handleSuccess(e) {
  console.log("ReCaptcha", e);
}

}










