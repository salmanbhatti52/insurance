import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yourquote',
  templateUrl: './yourquote.page.html',
  styleUrls: ['./yourquote.page.scss'],
})
export class YourquotePage implements OnInit {
  quoteItems:any;
  quoteArrayLength:number;
  constructor(public location: Location,
    public router:Router) { }
  firstName:string;
  lastName:string;
  companyName:string;
  vehicleMake:string;
  vehicleClass:string;
  quote:string;
  ngOnInit() {
    this.quoteItems =  JSON.parse(localStorage.getItem('quoteItems'));
    this.quoteArrayLength = this.quoteItems.length;
    console.log(this.quoteArrayLength);
    console.log(this.quoteItems);
    if(this.quoteArrayLength == 5){
      if(this.quoteItems[0].label == 'First Name'){
        this.firstName = this.quoteItems[0].value
        console.log(this.firstName);  
      }
      if(this.quoteItems[1].label == 'Last Name'){
        this.lastName = this.quoteItems[1].value
        console.log(this.lastName);  
      }
      if(this.quoteItems[2].label == 'Vehicle Make'){
        this.vehicleMake = this.quoteItems[2].value
        console.log(this.vehicleMake);
      }
      if(this.quoteItems[3].label == 'Vehicle Class'){
        this.vehicleClass = this.quoteItems[3].value
        console.log(this.vehicleClass);
      }
      if(this.quoteItems[4].label == 'Quote'){
        this.quote = this.quoteItems[4].value
        console.log(this.quote);
      }
    }else{
      if(this.quoteItems[0].label == 'Name of Company'){
        this.companyName = this.quoteItems[0].value
        console.log(this.companyName);  
      }
      if(this.quoteItems[1].label == 'Vehicle Make'){
        this.vehicleMake = this.quoteItems[1].value
        console.log(this.vehicleMake);  
      }
      if(this.quoteItems[2].label == 'Vehicle Class'){
        this.vehicleClass = this.quoteItems[2].value
        console.log(this.vehicleClass);
      }
      if(this.quoteItems[3].label == 'Quote'){
        this.quote = this.quoteItems[3].value
        console.log(this.quote);
      }
    }
    
    
    
  }
  buyOnlineQuote(){
    this.router.navigate(['/car-insurance-details']);
  }
  getAnewQuote(){
    this.router.navigate(['/home-page-screen-after-login']);
  }
  goback() {
    this.location.back()
  }

}
