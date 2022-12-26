import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-draft',
  templateUrl: './draft.page.html',
  styleUrls: ['./draft.page.scss'],
})
export class DraftPage implements OnInit {
  draftArr: any = '';
  currentdate: any;
  constructor(public router: Router) { }

  ngOnInit() {
    this.currentdate = moment(new Date()).format('DD-MM-YYYY');
    console.log('cdate=', this.currentdate);

  }

  ionViewWillEnter() {
    this.draftArr = JSON.parse(localStorage.getItem('draftArr'));

    console.log('draftArr----', JSON.parse(localStorage.getItem('draftArr')));
  }

  seeDetails(sp) {
    console.log(sp);

    localStorage.setItem('product_id', sp.product_id);
    localStorage.setItem('quote_id', sp.quote_id);
    localStorage.setItem('subProName', sp.product_name);
    localStorage.setItem('quoteItems', sp.quoteItems);
    this.router.navigate([sp.path]);
  }
}
