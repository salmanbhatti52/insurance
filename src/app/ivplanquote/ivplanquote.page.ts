import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ivplanquote',
  templateUrl: './ivplanquote.page.html',
  styleUrls: ['./ivplanquote.page.scss'],
})
export class IvplanquotePage implements OnInit {
  ivplanres: any;
  nameofplan = localStorage.getItem('subProName');
  monthlyinvestment = localStorage.getItem('monthlyinvestment');
  constructor(public location: Location, public router: Router) { }

  ngOnInit() {
    this.ivplanres = JSON.parse(localStorage.getItem('ivplanres'));

    console.log('this.ivplanres=--==', this.ivplanres);
  }
  buyOnlineQuote() {
    this.router.navigate(['/ivplaninformation']);
  }
  getAnewQuote() {
    this.router.navigate(['/home-page-screen-after-login']);
  }
  goback() {
    this.location.back();
  }
}
