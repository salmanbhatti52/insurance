import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internationalinformation',
  templateUrl: './internationalinformation.page.html',
  styleUrls: ['./internationalinformation.page.scss'],
})
export class InternationalinformationPage implements OnInit {
  localtravelproduct: any;
  productname: any;
  constructor(public location: Location,
    public router: Router) { }

  ngOnInit() {
    this.localtravelproduct = JSON.parse(localStorage.getItem('localtravel'));
    this.productname = this.localtravelproduct.name
    console.log('localtravelproduct', this.localtravelproduct);
    console.log('productname========' + this.productname);
  }

  goback() {
    this.location.back()
  }


  goto() {
    this.router.navigate(['/mypolicies']);
  }

}
