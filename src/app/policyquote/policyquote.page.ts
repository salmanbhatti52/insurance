import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-policyquote',
  templateUrl: './policyquote.page.html',
  styleUrls: ['./policyquote.page.scss'],
})
export class PolicyquotePage implements OnInit {
  getproduct: any;
  Gproduct: any;
  overalltax: any;
  fname: any;
  lname: any;
  userEmail: any;
  mobNumber: any;
  address: any;
  gender: any;
  value: string;
  vechilemake: string;
  vechilemodel: string;
  productType: string;
  prices: string;
  quoteitems: any;
  constructor(public location: Location, public router: Router, public activated: ActivatedRoute) { }

  ngOnInit() {
    this.quoteitems = JSON.parse(localStorage.getItem('quoteItemsvalues'))
    console.log(this.quoteitems);

    // this.overalltax = Math.floor(Number(localStorage.getItem('overalltax')));

    // this.fname = localStorage.getItem('fname');
    // this.lname = localStorage.getItem('lname');
    // this.userEmail = localStorage.getItem('userEmail');
    // this.mobNumber = localStorage.getItem('mobNumber');
    // this.address = localStorage.getItem('address');
    // this.gender = localStorage.getItem('gender');
    // console.log('fname', this.fname);
    // this.Gproduct = JSON.parse(localStorage.getItem('gibsproduct'));
    // console.log('', this.Gproduct);
    // this.getproduct = JSON.parse(localStorage.getItem('gibsProductres'));

    // console.log('dsadsads', this.getproduct);
    // console.log('dsadsads', localStorage.getItem('gibsProductres'));

    this.value = localStorage.getItem('valueofvechile')
    this.vechilemake = localStorage.getItem('vechilemake')
    this.vechilemodel = localStorage.getItem('vechilemodel');
    this.productType = localStorage.getItem('productType');
    // this.prices = JSON.parse(localStorage.getItem('motorprices'))
    // console.log(this.prices);

  }

  buyOnlineQuote() {
    console.log('totaltax ---', this.overalltax);

    this.router.navigate(['vehicleinformation']);
  }

  getAnewQuote() {
    this.router.navigate(['/home-page-screen-after-login']);
  }
  goback() {
    this.location.back();
  }
}
