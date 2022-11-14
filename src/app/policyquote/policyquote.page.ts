import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policyquote',
  templateUrl: './policyquote.page.html',
  styleUrls: ['./policyquote.page.scss'],
})
export class PolicyquotePage implements OnInit {
  getproduct: any;
  Gproduct: any;
  overalltax: string;
  constructor(public location: Location, public router: Router) {}

  ngOnInit() {
    this.overalltax = localStorage.getItem('overalltax');

    this.Gproduct = JSON.parse(localStorage.getItem('gibsproduct'));
    console.log('', this.Gproduct);
    this.getproduct = JSON.parse(localStorage.getItem('gibsProductres'));

    console.log('dsadsads', this.getproduct);
    console.log('dsadsads', localStorage.getItem('gibsProductres'));
  }

  buyOnlineQuote() {
    console.log('totaltax ---', this.overalltax);
    this.router.navigate(['payment2']);
  }

  getAnewQuote() {
    this.router.navigate(['/home-page-screen-after-login']);
  }
  goback() {
    this.location.back();
  }
}
