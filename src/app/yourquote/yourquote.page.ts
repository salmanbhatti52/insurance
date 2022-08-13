/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/member-ordering */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yourquote',
  templateUrl: './yourquote.page.html',
  styleUrls: ['./yourquote.page.scss'],
})
export class YourquotePage implements OnInit {
  quoteItems: any;
  quoteArrayLength: number;
  value = localStorage.getItem('subProName');
  constructor(public location: Location,
    public router: Router) { }
  firstName: string;
  lastName: string;
  companyName: string;
  vehicleMake: string;
  vehicleClass: string;
  quote: string;
  valueOfVehice: number;
  actualPremium: number;
  floodExtension: number;
  excessBuyBack: number;
  trackingCharge: number;
  ngOnInit() {
    this.quoteItems =  JSON.parse(localStorage.getItem('quoteItems'));
  }
  buyOnlineQuote(){
    this.router.navigate(['/car-insurance-details']);
  }
  getAnewQuote(){
    this.router.navigate(['/home-page-screen-after-login']);
  }
  goback() {
    this.location.back();
  }

}
