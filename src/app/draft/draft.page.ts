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
    var oneYearFromNow = new Date();
    var result = oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    console.log(result);
    moment(new Date(result)).format('DD-MM-YYYY');
    console.log(moment(new Date(result)).format('YYYY-MM-DD'));


  }

  ionViewWillEnter() {
    this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
    // var obj = {
    //   datetime: '2022-12-12T06:57:37.473Z',
    //   image:
    //     'https://www.cornerstone.com.ng/devtest/assets/uploads/product/2.jpg',
    //   path: '/yourquote',
    //   product_id: '2',
    //   quoteItems:
    //     '[{"label":"Name of Company","value":"fwerqwr21r","type":""},{"label":"Vehicle Make","value":"BMW 135","type":""},{"label":"Vehicle Class","value":"Private Buses/Pick up trucks (e.g. Toyota Hiace Buses, Hilux, Vans, Mini Bus etc.)","type":""},{"label":"Quote","value":7500,"type":"currency"}]',
    //   quote_id: 4219,
    //   subProName: 'Third Party',
    //   title: 'Third Party',
    // };

    // this.draftArr.push(obj);

    // localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
    console.log('draftArr----', JSON.parse(localStorage.getItem('draftArr')));
  }

  seeDetails(sp) {
    console.log(sp);

    localStorage.setItem('product_id', sp.product_id);
    localStorage.setItem('quote_id', sp.quote_id);
    localStorage.setItem('subProName', sp.subProName);
    localStorage.setItem('quoteItems', sp.quoteItems);
    this.router.navigate([sp.path]);
  }
}
