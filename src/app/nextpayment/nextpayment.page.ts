import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import * as moment from 'moment';
import { PaystackOptions } from 'angular4-paystack';

@Component({
  selector: 'app-nextpayment',
  templateUrl: './nextpayment.page.html',
  styleUrls: ['./nextpayment.page.scss'],
})
export class NextpaymentPage implements OnInit {

  quoteItems: any;
  quoteArrayLength: number;
  value = localStorage.getItem('subProName');
  chooosebank = '';
  othermethod = false;
  payemntmethod = '';
  paymentoption: any;
  priceofquote: any;
  subprodName: any;
  productID: any;
  draftArr: any;
  productres: any;
  policyNo: any;
  currentdate: any;
  enddate: any;
  quoteId: any;
  paystacktrxref: any;
  trxref: any;

  options: PaystackOptions = {
    amount: 50000,
    email: 'user@mail.com',
    ref: `${Math.ceil(Math.random() * 10e10)}`
  }


  constructor(public location: Location,
    public router: Router,
    public api: InsuranceAppService,
    public navCtrl: NavController) { }
  firstName: string;
  lastName: string;
  companyName: string;
  quote: string;
  valueOfVehice: number;
  actualPremium: number;
  floodExtension: number;
  excessBuyBack: number;
  trackingCharge: number;

  reference = '';
  title: any;
  amt: any = 0
  amtShow: any = 0
  email: any;

  vehicleVal: any;
  vehicleMake: any;
  vehicleClass: any;
  vehicleModel: any;
  regNo = '';
  engNo = '';
  chasisNo = '';
  vehclr = '';
  clientAddress = '';
  dobValue = '';
  yomValue = '';
  genderVal
  paymentInit() {
    console.log('Payment initialized');
  }

  ngOnInit() {
    // this.productres = JSON.parse(localStorage.getItem('productres'));
    // console.log('productres=====', this.productres);
    // this.quoteId = this.productres.quote.id
    // this.trxref = this.productres.quote.transaction_ref
    // this.currentdate = moment(new Date()).format('YYYY-MM-DD');
    // console.log('cdate=', this.currentdate);
    // var oneYearFromNow = new Date();
    // var result = oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    // this.enddate = moment(new Date(result)).format('YYYY-MM-DD');
    // this.subprodName = localStorage.getItem('subProName');
    // this.productID = localStorage.getItem('product_id');
    console.log('this.api.nextPayment=====', this.api.nextPayment);

    this.email = localStorage.getItem('email');
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));

    this.amt = this.api.nextPayment.amountDue + '00'
    this.amtShow = this.api.nextPayment.amountDue
    



    // for (var i = 0; i < this.quoteItems.length; i++) {
    //   if (this.quoteItems[i].type == "currency") {
    //     this.priceofquote = this.quoteItems[i].value
    //     localStorage.setItem('priceofquote', this.priceofquote)
    //     this.amt = this.priceofquote + '00'
    //     this.amtShow = this.priceofquote


    //     console.log('pesyyyyyy-------', localStorage.getItem('priceofquote'));

    //   }
    // }
    console.log('dsdasdasd', localStorage.getItem('productName'));

  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log('payment succesfull-----', ref);
    if (ref.status == 'success') {

      localStorage.setItem('trxref', ref.trxref);
      this.paystacktrxref = ref.trxref
      this.payment_method()


    } else {
      this.api.alertboxshow('Something went Wrong');
    }

  }

  //new paystackapi method////
  payment_method() {
    let paydata =
      'myData={"product_id":' +
      this.productID +
      ',"quote_id":' +
      this.quoteId +
      ',"payment_option":' +
      '"paystack"' +
      ',"verify_token":"' +
      localStorage.getItem('token') +
      '","method":"payment_method_select"}';

    this.api.insertData(paydata).subscribe((res: any) => {
      console.log('payemt response', res);
      if (res.status_no == 1) {
        this.paystackpayment()
      } else {
        // this.api.presenttoast(res.message);
        this.api.alertboxshow(res.message);
      }


    }, err => {
      this.api.alertboxshow('err in payment method select ' + err);
      // this.api.hideLoader()
    });

  }
  /////////////////
  paystackpayment() {
    let datasend =
      'myData={"transaction_ref":' +
      '"' + this.trxref + '"' +
      ',"paystack_transaction_ref":' +
      '"' + this.paystacktrxref + '"' +
      ',"quote_id":' +
      '"' + this.quoteId + '"' +
      ',"verify_token":"' +
      localStorage.getItem('token') +
      '","method":"standalonePaystackConfirm"}';

    this.api.showLoader()
    this.api.insertData(datasend).subscribe((res: any) => {
      console.log('payemt response', res);
      // this.api.alertboxshow(res);
      if (res.status_no == 1) {
        this.api.hideLoader();
        this.api.alertboxshow(res.message);
        // if (localStorage.getItem('productName') == 'Motor Insurance') {
        this.sendcertificate()
        // } else {
        // this.api.presenttoast(res.message)
        // this.api.alertboxshow(res.message)
        this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
        console.log(this.draftArr);



      } else {
        this.api.hideLoader()
        // this.api.presenttoast(res.message)
        this.api.alertboxshow(res.message)
      }


    }, err => {
      this.api.alertboxshow('error in standalonePaystackConfirm: ' + JSON.stringify(err));
      this.api.hideLoader()
    });
  }
  sendcertificate() {
    this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
    console.log(this.draftArr);

    for (var i = 0; i < this.draftArr.length; i++) {
      if (this.draftArr[i].product_id == this.productID) {

        this.draftArr.splice(i, 1);

      }

    }
    localStorage.setItem('draftArr', JSON.stringify(this.draftArr));

    let datasend =

      'myData={"quote_id":' +
      this.quoteId +
      ',"verify_token":"' +
      localStorage.getItem('token') +
      '","method":"send_certificate"}';
    // this.api.showLoader()
    this.api.insertData(datasend).subscribe((res: any) => {
      console.log('payemt response', res);
      this.api.hideLoader();
      // this.api.alertboxshow(res);
      if (res.status_no == 1) {
        localStorage.setItem('certificatelink', res.certificate_link)
        // this.paystackpayment()
        // this.paystackurl = this.sanitizer.bypassSecurityTrustResourceUrl(res.paystack.url)
        this.api.presenttoast(res.message)
        this.navCtrl.navigateRoot('paymentresponse');
        // let p = res.fields.callback_url
        // let split = p.split('?')[1]
        // let split2 = p.split('=')[1]
        // let transval = '&' + split
        // let reference = '&reference=' + split2
        // this.referenceval = reference
        // console.log('ddddddddddddddd', transval);
      } else {
        // this.api.presenttoast(res.message)
        this.api.alertboxshow(res.message)
      }


    }, err => {
      this.api.alertboxshow('err in certificate' + err);
      this.api.hideLoader()
    });
  }

  paymentCancel() {
    console.log('payment failed');
  }




  buyOnlineQuote() {
    this.router.navigate(['/car-insurance-details']);
  }
  getAnewQuote() {
    this.router.navigate(['/home-page-screen-after-login']);
  }
  goback() {
    this.location.back();
  }

  selectmethod(val) {
    console.log('value grt====', val);
    this.payemntmethod = val;
    if (val == 'other') {
      this.othermethod = true;
    } else {
      this.othermethod = false;
    }
  }
  onItemChange(ev) {
    console.log(" Value is : ", ev);
    this.chooosebank = ev;
  }

  proceed() {
    if (this.payemntmethod == '') {
      this.api.presenttoast('Choose one payment method')
    } else {
      if (this.payemntmethod == 'WebPAY') {
        this.paymentoption = 1;
      }

    }
  }


}
