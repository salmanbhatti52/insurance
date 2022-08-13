import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payquote',
  templateUrl: './payquote.page.html',
  styleUrls: ['./payquote.page.scss'],
})
export class PayquotePage implements OnInit {
  amount: any;
  transaction_ref: any;
  policyId: any;

  constructor(public location: Location,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let pay = JSON.parse(this.activatedRoute.snapshot.params['payres']);
    console.log('pay response====', pay);
    this.amount = pay.amount;
    this.transaction_ref = pay.transaction_ref;
    this.policyId = pay.id
  }

  goback() {
    this.location.back()
  }
}
