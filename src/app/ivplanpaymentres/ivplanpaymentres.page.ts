import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ivplanpaymentres',
  templateUrl: './ivplanpaymentres.page.html',
  styleUrls: ['./ivplanpaymentres.page.scss'],
})
export class IvplanpaymentresPage implements OnInit {
  email: any;
  subProName: any;
  trxref: any;
  ivplanres: any
  constructor(public router: Router) { }

  ngOnInit() {
    this.subProName = localStorage.getItem('subProName');
    this.trxref = localStorage.getItem('trxref')
    this.ivplanres = JSON.parse(localStorage.getItem('ivplanres'));

    console.log('this.ivplanres=--==', this.ivplanres);
  }

  goback() {
    this.router.navigate(['/home-page-screen-after-login']);
  }

}
