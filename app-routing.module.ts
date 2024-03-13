import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CircularsComponent } from './components/circulars/circulars.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClientregistrationComponent } from './components/clientregistration/clientregistration.component';
import { AuctionfloormarketComponent } from './components/auctionfloormarket/auctionfloormarket.component';
import { NafedauctionfloorComponent } from './components/nafedauctionfloor/nafedauctionfloor.component';
import { NafedpsfauctionfloorComponent } from './components/nafedpsfauctionfloor/nafedpsfauctionfloor.component';
import { MpmarkfedauctionfloorComponent } from './components/mpmarkfedauctionfloor/mpmarkfedauctionfloor.component';
import { SignupComponent } from './components/signup/signup.component';
import { Term1Component } from './components/term1/term1.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'circulars', component: CircularsComponent },
  { path: 'contactus', component:  ContactusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'clientregistration', component: ClientregistrationComponent },
  { path: 'auctionfloor', component: AuctionfloormarketComponent },
  { path: 'nafedauctionfloor', component: NafedauctionfloorComponent },
  { path: 'nafedpsfauctionfloor', component: NafedpsfauctionfloorComponent },
  { path: 'mpauctionfloor', component: MpmarkfedauctionfloorComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'data', component: Term1Component},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
