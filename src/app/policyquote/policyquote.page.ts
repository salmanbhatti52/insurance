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
  constructor(public location: Location, public router: Router, public activated: ActivatedRoute) { }

  ngOnInit() {
    this.overalltax = Math.floor(Number(localStorage.getItem('overalltax')));

    this.fname = this.activated.snapshot.params['fname'];
    this.lname = this.activated.snapshot.params['lname'];
    this.userEmail = this.activated.snapshot.params['userEmail'];
    this.mobNumber = this.activated.snapshot.params['mobNumber'];
    this.address = this.activated.snapshot.params['address'];
    this.gender = this.activated.snapshot.params['gender'];
    console.log('fname', this.fname);
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
