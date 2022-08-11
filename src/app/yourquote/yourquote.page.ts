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
    if(this.value == 'Third Party') {
      this.quoteItems =  JSON.parse(localStorage.getItem('thirdPartyQuoteItems'));
      this.quoteArrayLength = this.quoteItems.length;
      console.log(this.quoteArrayLength);
      console.log(this.quoteItems);
      if(this.quoteArrayLength == 5){
        if(this.quoteItems[0].label == 'First Name'){
          this.firstName = this.quoteItems[0].value;
          console.log(this.firstName);
        }
        if(this.quoteItems[1].label == 'Last Name'){
          this.lastName = this.quoteItems[1].value;
          console.log(this.lastName);
        }
        if(this.quoteItems[2].label == 'Vehicle Make'){
          this.vehicleMake = this.quoteItems[2].value;
          console.log(this.vehicleMake);
        }
        if(this.quoteItems[3].label == 'Vehicle Class'){
          this.vehicleClass = this.quoteItems[3].value;
          console.log(this.vehicleClass);
        }
        if(this.quoteItems[4].label == 'Quote'){
          this.quote = this.quoteItems[4].value;
          console.log(this.quote);
        }
      }else{
        if(this.quoteItems[0].label == 'Name of Company'){
          this.companyName = this.quoteItems[0].value;
          console.log(this.companyName);
        }
        if(this.quoteItems[1].label == 'Vehicle Make'){
          this.vehicleMake = this.quoteItems[1].value;
          console.log(this.vehicleMake);
        }
        if(this.quoteItems[2].label == 'Vehicle Class'){
          this.vehicleClass = this.quoteItems[2].value;
          console.log(this.vehicleClass);
        }
        if(this.quoteItems[3].label == 'Quote'){
          this.quote = this.quoteItems[3].value;
          console.log(this.quote);
        }
      }
    }
    else if(this.value == 'Enhanced Comprehensive'){
      this.quoteItems =  JSON.parse(localStorage.getItem('enhancedCompQuoteItems'));
      this.quoteArrayLength = this.quoteItems.length;
      console.log(this.quoteArrayLength);
      console.log(this.quoteItems);
      if(this.quoteArrayLength == 8){
        if(this.quoteItems[0].label == 'Vehicle Make'){
          this.vehicleMake = this.quoteItems[0].value;
          console.log(this.vehicleMake);
        }
        if(this.quoteItems[1].label == 'Vehicle Class'){
          this.vehicleClass = this.quoteItems[1].value;
          console.log(this.vehicleClass);
        }
        if(this.quoteItems[2].label == 'Value of Vehicle'){
          this.valueOfVehice = this.quoteItems[2].value;
          console.log(this.valueOfVehice);
        }
        if(this.quoteItems[3].label == 'Actual Premium'){
          this.actualPremium = this.quoteItems[3].value;
          console.log(this.actualPremium);
        }
        if(this.quoteItems[4].label == 'Flood Extension'){
          this.floodExtension = this.quoteItems[4].value;
          console.log(this.floodExtension);
        }
        if(this.quoteItems[5].label == 'Excess Buy Back'){
          this.excessBuyBack = this.quoteItems[5].value;
          console.log(this.excessBuyBack);
        }
        if(this.quoteItems[6].label == 'Tracking Charge'){
          this.trackingCharge = this.quoteItems[6].value;
          console.log(this.trackingCharge);
        }
        if(this.quoteItems[7].label == 'Quote'){
          this.quote = this.quoteItems[7].value;
          console.log(this.quote);
        }
      }
    }
    else if(this.value == 'Auto Variants'){
      this.quoteItems =  JSON.parse(localStorage.getItem('autoVarientQuoteItems'));

    }
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
