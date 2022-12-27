/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InsuranceAppService } from '../services/insurance-app.service';
import { Router } from '@angular/router';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-ivplan1',
  templateUrl: './ivplan1.page.html',
  styleUrls: ['./ivplan1.page.scss'],
})
export class Ivplan1Page implements OnInit {
  // @ViewChild('mySegment', { read: ElementRef }) private mySegment: ElementRef;
  subProName: any;
  fName = '';
  lName = '';
  userEmail = '';
  mobNumber = '';
  tourStartDate = format(new Date(), 'yyyy-MM-dd');
  otheName = '';
  showPickerStartDate = false;
  useTitle = 'Please Select';
  monthlyinvestment: any = '';

  isavetitle = [
    { id: '0', title: 'Mr', active: false },
    { id: '1', title: 'Ms', active: false },
    { id: '2', title: 'Dr', active: false },
    { id: '3', title: 'Air Vice Marshall', active: false },
    { id: '4', title: 'Alhaji', active: false },
    { id: '5', title: 'Ambassador', active: false },
    { id: '6', title: 'Architect', active: false },
    { id: '7', title: 'Barr', active: false },
    { id: '8', title: 'Bishop', active: false },
    { id: '9', title: 'Brig', active: false },
    { id: '10', title: 'Brig GEN', active: false },
    { id: '11', title: 'CAPT', active: false },
    { id: '12', title: 'Chief(Mrs)', active: false },
    { id: '13', title: 'Commander ', active: false },
    { id: '14', title: 'Dr(Mrs)', active: false },
    { id: '15', title: 'Elder', active: false },
    { id: '16', title: 'Hajia', active: false },
    { id: '17', title: 'Hajia(Chief)', active: false },
    { id: '18', title: 'His Excellency', active: false },
    { id: '19', title: 'Lt Col', active: false },
    { id: '21', title: 'Major', active: false },
    { id: '22', title: 'Major Gen', active: false },
    { id: '23', title: 'Master', active: false },
    { id: '24', title: 'Professor', active: false },
    { id: '25', title: 'Rev Sis', active: false },
    { id: '26', title: 'Reverend', active: false },
    { id: '27', title: 'Senator', active: false },
  ];

  Paymentfrequency = [
    { id: '0', title: 'Monthly', active: false },
    { id: '1', title: 'Quarterly', active: false },
    { id: '2', title: 'Half-yearly', active: false },
    { id: '3', title: 'Yearly', active: false },
  ];
  Pfrequency = 'Please Select';
  showpaymentfrequency = false;
  duration: any;
  sumassured = 'Please Select';
  showsumassured = false;
  showTitle = false;
  sumassuredarray = [
    { id: '0', value: '100000', active: false },
    { id: '1', value: '200000', active: false },
    { id: '2', value: '300000', active: false },
    { id: '3', value: '400000', active: false },
    { id: '4', value: '500000', active: false },
    { id: '5', value: '600000', active: false },
    { id: '6', value: '700000', active: false },
    { id: '7', value: '800000', active: false },
    { id: '8', value: '900000', active: false },
    { id: '9', value: '1000000', active: false },
  ];
  // valuetype = 'Third Party';
  draftArr: any = '';
  constructor(
    public router: Router,
    public api: InsuranceAppService,
    public location: Location
  ) { }

  ngOnInit() {
    this.subProName = localStorage.getItem('subProName');
    console.log('subproduct name-----', this.subProName);

    this.userEmail = localStorage.getItem('email');
    this.mobNumber = localStorage.getItem('number');
  }

  goback() {
    this.location.back();
  }

  getQuote() {
    this.router.navigate(['/quote1']);
  }

  openpaymentfrequency() {
    if (this.showpaymentfrequency == true) {
      this.showpaymentfrequency = false;
    } else {
      this.showpaymentfrequency = true;
    }
  }

  opensumassured() {
    if (this.showsumassured == true) {
      this.showsumassured = false;
    } else {
      this.showsumassured = true;
    }
  }

  selectpaymentfrequency(list, index) {
    this.Pfrequency = list.title;
    this.showpaymentfrequency = false;
    this.Paymentfrequency.map((val, i) => {
      // console.log(i);

      if (index == i) {
        this.Paymentfrequency[i].active = true;
      }
      if (index != i) {
        this.Paymentfrequency[i].active = false;
      }
    });
  }
  selectsumassured(list, index) {
    this.sumassured = list.value;
    this.showsumassured = false;
    this.sumassuredarray.map((val, i) => {
      // console.log(i);

      if (index == i) {
        this.sumassuredarray[i].active = true;
      }
      if (index != i) {
        this.sumassuredarray[i].active = false;
      }
    });
  }

  openDropDwon(type) {
    console.log('DROPDOWN TYPE ----', type);
    if (type == 'title') {
      this.showTitle = !this.showTitle;
    }
  }
  selectTitle(list, index) {
    this.useTitle = list.title;
    this.showTitle = false;
    this.isavetitle.map((val, i) => {
      // console.log(i);

      if (index == i) {
        this.isavetitle[i].active = true;
      }
      if (index != i) {
        this.isavetitle[i].active = false;
      }
    });
  }
  validateThirdParty() {
    const response = { message: 'message', status: false };

    if (this.fName == '') {
      response.message = 'First Name required';
    } else if (this.lName == '') {
      response.message = 'Last Name required';
    } else if (this.userEmail == '') {
      console.log('not private');
      response.message = 'Email Address required';
    } else if (this.mobNumber == '') {
      response.message = 'Phone Number required';
    } else {
      response.message = 'Third party validated';
      response.status = true;
    }

    return response;
  }

  createQuote() {
    if (this.monthlyinvestment == '' || this.fName == '' || this.lName == '') {
      this.api.presenttoast('Please enter required fields.');
    } else {
      this.api
        .postparam(
          'https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=100&opt=ICEDUP&csurname=' +
          this.fName +
          '&cothname=' +
          this.lName +
          '&cemail=' +
          this.userEmail +
          '&regdate=10-10-2022&country=NG&plan_code=ICEDUP',
          '39109f7df56e1CORNERStone9e685066bb852'
        )
        .subscribe((data: any) => {
          console.log('response====', data);

          this.calculatorAPI(data.result.userid);
          // this.api.presenttoast(res.result.message);
        });
    }
  }

  calculatorAPI(userid) {
    var data = new FormData();
    data.append('opt', 'iclifp');
    data.append('userid', userid);

    this.api.showLoader();
    this.api
      .postdata(
        'https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=908',
        data,
        '39109f7df56e1CORNERStone9e685066bb852'
      )
      .subscribe(
        (res: any) => {
          console.log('response calculator----', res);
          this.api.hideLoader();
          this.autoPostRecipt(res.result.quoteId);
          // this.api.presenttoast(res.result.message);
        },
        (err) => {
          this.api.hideLoader();
          console.log(err);
        }
      );
  }

  autoPostRecipt(quoteId) {
    var data = new FormData();
    var quoteId = quoteId;
    data.append('polnum', quoteId);
    data.append('amount', this.monthlyinvestment);

    localStorage.setItem('monthlyinvestment', this.monthlyinvestment);

    var ss = Math.random();
    var s1 = ss.toString().split('0.');

    data.append('payment_ref', s1.toString());

    this.api.showLoader();
    this.api
      .postdata(
        'https://ies.cornerstone.com.ng/demo2/api_ies/ies_connect.php?process=Processopenledapi&process_code=912',
        data,
        '39109f7df56e1CORNERStone9e685066bb852'
      )
      .subscribe(
        (res: any) => {
          console.log('autoPostRecipt res----', res);
          this.api.hideLoader();
          localStorage.setItem('ivplanres', JSON.stringify(res));
          var obj = {
            title: this.subProName,
            product_id: res.refnum,
            quote_id: quoteId,
            subProName: this.subProName,
            quoteItems: 'dummy',
            image:
              'https://www.cornerstone.com.ng/devtest/assets/uploads/product/2.jpg',
            path: '/ivplanquote',
            datetime: new Date().toISOString(),
          };

          this.draftArr = JSON.parse(localStorage.getItem('draftArr'));

          if (this.draftArr) {
            this.draftArr.push(obj);
          } else {
            this.draftArr = [obj];
          }
          localStorage.setItem('subProName', this.subProName);
          localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
          this.router.navigate(['/ivplanquote']);

          // this.api.presenttoast(res.result.message);
        },
        (err) => {
          this.api.hideLoader();
          console.log(err);
        }
      );
  }
}
