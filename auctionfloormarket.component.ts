import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auctionfloormarket',
  templateUrl: './auctionfloormarket.component.html',
  styleUrls: ['./auctionfloormarket.component.css']
})
export class AuctionfloormarketComponent  {

  constructor(private fb: FormBuilder,private router:Router) { }

  NAFEDAuctionFloor(){
    this.router.navigate(['nafedauctionfloor']);
  }

  NAFEDPSFAuctionFloor(){
    this.router.navigate(['nafedpsfauctionfloor']);
  }

  MPAuctionFloor(){
    this.router.navigate(['mpauctionfloor']);
  }

  ENAMauction(){
    this.router.navigate(['enamauction']);
  }

  MillingProcess(){
    this.router.navigate(['millingprocess']);
  }

  BeejgunnyAuctions(){
    this.router.navigate(['beejgunnyauctions']);
  }

  Hafedauctions(){
    this.router.navigate(['hafedauctions']);
  }
  
  Reverseauctions(){
    this.router.navigate(['reverseauctions']);
  }
  

}


