import { Component, Input  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-clientregistration',
  templateUrl: './clientregistration.component.html',
  styleUrls: ['./clientregistration.component.css']
})
export class ClientregistrationComponent {
  visible:boolean = true;
  changetype:boolean =true;
  viewpass(){
   this.visible = !this.visible
   this.changetype = !this.changetype;
  }

  clientRegistration: FormGroup;
  submitted = false;
  //showLogin = false;
  authError: String = '';

  //@Input() cnamedata: any;
  //@Input() mobiledata: any;
 nametoDisplay:any;
 mobiletoDisplay:any;
  
  constructor(
    public fb: FormBuilder, private router: Router, private clientregistration: RegistrationService,
     private userService:UserService,private route:ActivatedRoute  ) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params)
     this.mobiletoDisplay=params.data1
      this.nametoDisplay=params.data;
    })
  
    this.clientRegistration = this.fb.group({
      
    
    /* mobile: [
      
        [
        

        ],
      ],*/
      type: ['', [Validators.required]],
      address: [
        '',
        [
          Validators.required,
          Validators.minLength(4),

        ],
      ],
      village: ['', [Validators.required, Validators.minLength(4),]],
      state: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(4)]],
   name: ['', ],
      street: ['', [Validators.required, Validators.minLength(4),]],
      city: ['', [Validators.required, Validators.minLength(4),]],
      country: ['', [Validators.required]],
       username: ['', [Validators.required]],
       password: ['', [Validators.required]],

    });


    /*this.route.queryParams.subscribe((params:any)=>{
      console.log(params)
      this.mobiletoDisplay=params.data1
      this.nametoDisplay=params.data;
    })*/
    
    //{
      // this.clientregistration.reloadClientregistration()
    //}
  }


  submit() {
    console.log(this.clientRegistration.value,"1");
    
    this.submitted = true;

    if (this.clientRegistration.invalid) {
    console.log(this.clientRegistration.value,"2");
    console.log(this.clientRegistration.controls);
    
    return 
    }
    else{
      this.userService.clientRegistration(this.clientRegistration.value).subscribe(res => {
        console.log(res);
        alert("Registration successful");

          this.router.navigate(['auctionfloor']);


        
       }
     );
    }   
    
  }
  




  get f() { return this.clientRegistration.controls; }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }


}