import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LeadComponent } from './components/lead/lead.component';
import { CircularsComponent } from './components/circulars/circulars.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ClientregistrationComponent } from './components/clientregistration/clientregistration.component';
import { AuctionfloormarketComponent } from './components/auctionfloormarket/auctionfloormarket.component';
import { BetaComponent } from './components/beta/beta.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MpmarkfedauctionfloorComponent } from './components/mpmarkfedauctionfloor/mpmarkfedauctionfloor.component';
import { NafedauctionfloorComponent } from './components/nafedauctionfloor/nafedauctionfloor.component';
import { NafedpsfauctionfloorComponent } from './components/nafedpsfauctionfloor/nafedpsfauctionfloor.component';
import { MatTableModule } from '@angular/material/table'
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { PastauctionComponent } from './components/pastauction/pastauction.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpcomingauctionComponent } from './components/upcomingauction/upcomingauction.component';
import { CharacterDirective } from './components/services/character.directive';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { Term1Component } from './components/term1/term1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    LeadComponent,
    CircularsComponent,
    RegisterComponent,
    ContactusComponent,
    ClientregistrationComponent,
    AuctionfloormarketComponent,
    BetaComponent,
    MpmarkfedauctionfloorComponent,
    NafedauctionfloorComponent,
    NafedpsfauctionfloorComponent,
    PastauctionComponent,
    SignupComponent,
    UpcomingauctionComponent,
    CharacterDirective,
    Term1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
   NgxCaptchaModule,
    NgHcaptchaModule.forRoot({ siteKey: '1b1afe16-c082-4211-accf-2921906c959b' }) 



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
