import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import { IonModal } from '@ionic/angular';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from "@angular/platform-browser";
import { Pipe, PipeTransform } from "@angular/core";
import { OverlayEventDetail } from '@ionic/core/components';

@Pipe({ name: "safe" })
@Component({
  selector: 'app-payment2',
  templateUrl: './payment2.page.html',
  styleUrls: ['./payment2.page.scss'],
})
export class Payment2Page implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  quoteItems: any;
  quoteArrayLength: number;
  value = localStorage.getItem('subProName');
  chooosebank = '';
  othermethod = false;
  payemntmethod = '';
  paymentoption: any;
  priceofquote: any;
  productres: any;
  policyNo: any;
  subprodName: any;
  draftArr: any;
  productID: string;
  prices: any;
  quoteprocess: any;
  quote_id: any;
  paystackurl: any;
  referenceval: any;
  trxref: string;
  paystacktrxref: string;
  proposalprocess: any;

  constructor(
    public location: Location,
    public router: Router,
    public api: InsuranceAppService,
    public navCtrl: NavController,
    private sanitizer: DomSanitizer
  ) { }
  firstName: string;
  lastName: string;
  companyName: string;
  vehicleMake: string;
  vehicleClass: string;
  quote: string;
  valueOfVehice: number;
  actualPremium: number;
  floodExtension: number;
  excessBuyBack: number;
  trackingCharge: number;

  reference = '';
  title: any;
  amt: any = 0;
  amtShow: any = 0;
  email: any;

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    console.log('payment succesfull-----', ref);
    if (ref.status == 'success') {
      localStorage.setItem('trxref', ref.trxref)
      this.paystacktrxref = ref.trxref
      // this.trxref = ref.transaction
      this.payment_method()
      // this.pay()
    }
  }


  paymentCancel() {
    console.log('payment failed');
  }

  ngOnInit() {
    this.quoteprocess = JSON.parse(localStorage.getItem('quoteprocess'));
    this.proposalprocess = JSON.parse(localStorage.getItem('vechileinfo'))

    console.log('proposal info:::', this.proposalprocess);
    this.trxref = this.proposalprocess.quote.transaction_ref

    this.quote_id = this.quoteprocess.info.quote_id
    // this.email = localStorage.getItem('email');
    this.email = this.proposalprocess.quote.email

    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    console.log('dasdasd-w--www', this.reference);

    console.log('quote_id', this.quote_id);


    // this.prices = JSON.parse(localStorage.getItem('motorprices'))
    // this.amt = this.prices.amount
    this.prices = JSON.parse(localStorage.getItem('quoteItemsvalues'))
    console.log(this.prices);
    for (var i = 0; i < this.prices.length; i++) {
      if (this.prices[i].label == 'Quote') {
        this.amtShow = this.prices[i].value
        let fixedamount = this.amtShow.toFixed(0)
        this.amt = fixedamount * 100
        console.log('amt', this.amt);

      }
    }

    // let p = 'https://www.cornerstone.com.ng/devtest/webservice/app/paystackCallback/?txnref=4236714128'
    // let split = p.split('?')[1]
    // let split2 = p.split('=')[1]
    // console.log('ddddddddddddddd', split2);
    // let transval = '&' + split
    // console.log('ddddddddddddddd', transval);
    // let reference = '&reference=' + split2
    // console.log('ddddddddddddddd', reference);
    // old code.....
    ////////////////////
    // this.subprodName = localStorage.getItem('subProName');
    // this.productID = localStorage.getItem('product_id');
    // this.email = localStorage.getItem('email');
    // this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    // // this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));

    // this.priceofquote = Math.floor(Number(localStorage.getItem('overalltax')));
    // this.amt = this.priceofquote + '' + '00';
    // console.log('dsadsads', localStorage.getItem('gibsProductres'));
    // if (localStorage.getItem('gibsProductres') == null) {
    //   this.policyNo = ''
    // } else {
    //   this.productres = JSON.parse(localStorage.getItem('gibsProductres'));
    //   this.policyNo = this.productres.policyNo
    // }
    ///////////////////////////////
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
    console.log(' Value is : ', ev);
    this.chooosebank = ev;
  }

  proceed() {
    if (this.payemntmethod == '') {
      this.api.presenttoast('Choose one payment method');
    } else {
      if (this.payemntmethod == 'WebPAY') {
        this.paymentoption = 1;
        // this.paymentapi();
      }
      // else {
      //   if (this.payemntmethod == 'other') {
      //     this.paymentoption = 2;
      //     if (this.chooosebank == '') {
      //       this.api.presenttoast('Choose atleast one bank')
      //     } else {
      //       this.paymentapi(this.paymentoption)
      //     }
      //   }
      // }
    }
  }

  pay() {
    this.api.showLoader();
    var myData = {
      sid: 'ECHANNEL2',
      token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
    };
    this.api.gibsapi(myData).subscribe(
      (res: any) => {
        // console.log(res);
        this.api.hideLoader()
        let token = res.accessToken;
        this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
        console.log(this.draftArr);

        for (var i = 0; i < this.draftArr.length; i++) {
          if (this.draftArr[i].product_id == this.productID) {

            this.draftArr.splice(i, 1);

          }

        }
        localStorage.setItem('draftArr', JSON.stringify(this.draftArr));

        this.getcertificate(token);


      },
      (err) => {
        console.log(err);
        this.api.hideLoader();
      }
    );

  }
  getcertificate(token) {
    this.api.showLoader();
    let encode = encodeURIComponent(this.policyNo);
    console.log('eee--', encode);

    this.api.get('http://testcipapiservices.gibsonline.com/api/utilities/send/certificate?policyNo=' + encode + '&email=' + this.email, token).subscribe((res: any) => {
      console.log('certificate====', res);
      this.api.hideLoader()
      this.navCtrl.navigateRoot('payment2response');
    }, err => {
      this.api.hideLoader();
      this.api.presenttoast('Something went wrong');
    })
  }

  //new paystackapi method////
  payment_method() {
    let paydata =
      'myData={"product_id":' +
      "59" +
      ',"quote_id":' +
      this.quote_id +
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
        this.api.presenttoast(res.message)
      }


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
      '"' + this.quote_id + '"' +
      ',"verify_token":"' +
      localStorage.getItem('token') +
      '","method":"standalonePaystackConfirm"}';

    this.api.showLoader()
    this.api.insertData(datasend).subscribe((res: any) => {
      console.log('payemt response', res);
      if (res.message != 'Payment method not found.') {
        this.api.hideLoader()
        this.sendcertificate()
      } else {
        this.api.hideLoader()
        this.api.presenttoast(res.message)
      }


    });
  }
  sendcertificate() {



    this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
    console.log(this.draftArr);

    for (var i = 0; i < this.draftArr.length; i++) {
      if (this.draftArr[i].quote_id == this.quote_id) {

        this.draftArr.splice(i, 1);

      }

    }
    localStorage.setItem('draftArr', JSON.stringify(this.draftArr));

    let datasend =

      'myData={"quote_id":' +
      this.quote_id +
      ',"verify_token":"' +
      localStorage.getItem('token') +
      '","method":"send_certificate"}';
    this.api.showLoader()
    this.api.insertData(datasend).subscribe((res: any) => {
      console.log('payemt response', res);
      this.api.hideLoader()
      if (res.status_no == 1) {
        localStorage.setItem('certificatelink', res.certificate_link)
        // this.paystackpayment()
        // this.paystackurl = this.sanitizer.bypassSecurityTrustResourceUrl(res.paystack.url)
        this.api.presenttoast(res.message)
        this.navCtrl.navigateRoot('payment2response');
        // let p = res.fields.callback_url
        // let split = p.split('?')[1]
        // let split2 = p.split('=')[1]
        // let transval = '&' + split
        // let reference = '&reference=' + split2
        // this.referenceval = reference
        // console.log('ddddddddddddddd', transval);
      } else {
        this.api.presenttoast(res.message)
      }

      // if (paymentoption == 1) {
      //   this.navCtrl.navigateForward([
      //     'payquote',
      //     {
      //       payres: JSON.stringify(res.transaction),
      //     },
      //   ]);
      // }
    });
  }

  confirm() {
    this.modal.dismiss('', 'confirm');
  }
  onWillDismiss(event: Event) {
    console.log('event', event);

    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {

      this.api.getcallbackurl(this.referenceval).subscribe((url: any) => {
        console.log('callback url:::', url);

      })
    }
  }


}
