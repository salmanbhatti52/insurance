import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import * as moment from 'moment';
import { PaystackOptions } from 'angular4-paystack';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { FlutterwaveService, InlinePaymentOptions, PaymentSuccessResponse } from 'flutterwave-angular-v3';

@Component({
  selector: 'app-policypay',
  templateUrl: './policypay.page.html',
  styleUrls: ['./policypay.page.scss'],
})
export class PolicypayPage implements OnInit {


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
  loggedInUserInfo: any;
  paymetdone: any = '';


  constructor(public location: Location,
    public router: Router,
    public api: InsuranceAppService,
    public navCtrl: NavController,
    public iab: InAppBrowser,
    private flutterwaveService: FlutterwaveService) { }
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



  publicKey: any = ''
  customerDetails: any = ''
  customizations: any = ''
  meta: any = ''
  paymentData: InlinePaymentOptions; // Declare the paymentData property.


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
    console.log('LoginUserInfo=====', JSON.parse(localStorage.getItem('LoginUserInfo')))

    this.loggedInUserInfo = JSON.parse(localStorage.getItem('LoginUserInfo'))

    this.publicKey = this.api.flutterwaveAPIKey;

    this.customerDetails = {
      name: this.loggedInUserInfo.first_name + ' ' + this.loggedInUserInfo.last_name,
      email: this.loggedInUserInfo.email,
      phone_number: this.loggedInUserInfo.phone,
    };

    this.customizations = {
      title: "Cornerstone payment",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1eJCezNB-KM9Exk7Pwri7EBDcNP0vbDhsw&s",
    };

    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;


    this.meta = { counsumer_id: this.loggedInUserInfo.user_id, consumer_mac: this.reference };

    this.prepareOpt()




    this.email = localStorage.getItem('email');
    this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));

    this.amt = this.api.policyamountDue + '00'
    this.amtShow = this.api.policyamountDue




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


  prepareOpt() {
    this.paymentData = {
      public_key: this.publicKey,
      tx_ref: this.generateReference(),
      amount: this.api.policyamountDue,
      currency: "NGN",
      payment_options: "card,ussd",
      redirect_url: "",
      meta: this.meta,
      customer: this.customerDetails,
      customizations: this.customizations,
      callback: this.makePaymentCallback,
      onclose: this.closedPaymentModal,
      callbackContext: this,
    };
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
        this.paystackpayment(res.transaction.transaction_ref)
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
  paystackpayment(ref) {

    var fluterpay = JSON.parse(this.paymetdone)

    let datasend = 'myData={"transaction_ref":' +
      '"' + this.api.nextPayment.quote.transaction_ref + '"' +
      ',"flutterwave_transaction_id":' +
      '"' + fluterpay.transaction_id + '"' +
      ',"quote_id":' +
      '"' + this.api.nextPayment.quote.id + '"' +
      ',"verify_token":"' +
      localStorage.getItem('token') +
      // '","method":"standalonePaystackConfirm"}';
      '","method":"standaloneFlutterwaveConfirm"}';
    this.api.showLoader()
    this.api.insertData(datasend).subscribe((res: any) => {
      console.log('payemt response', res);
      // this.api.alertboxshow(res);
      if (res.status_no == 1) {
        this.api.hideLoader();
        this.api.presenttoast('Payment has been done succesfully.')

        this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
        console.log(this.draftArr);



      } else {
        this.api.hideLoader()
        // this.api.presenttoast(res.message)
        this.api.alertboxshow(res.message)
      }


    }, err => {
      this.api.alertboxshow('error in standaloneFlutterwaveConfirm: ' + JSON.stringify(err));
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

  pay() {
    const browser = this.iab.create(
      'https://checkout.paystack.com/w8sppel38nn6ubd',
      '_blank'
    );
  }





  ///////////////////////////




  //////////////////////////



  makePayment() {
    this.flutterwaveService.inlinePay(this.paymentData);
  }
  makePaymentCallback(response: PaymentSuccessResponse): void {
    console.log("Payment callback", JSON.stringify(response));
    this.paymetdone = JSON.stringify(response)
    this.api.presenttoast('Payment has been done succesfully.')
    this.location.back()


    //{"status":"successful","customer":{"name":"BLESSING DOE","email":"atfar@cornerstone.com.ng","phone_number":"0809765435"},"transaction_id":8289225,"tx_ref":"1735044787946","flw_ref":"FLW-MOCK-e6574da8796e025d097a836dcacaedcb","currency":"NGN","amount":60000,"charged_amount":60000,"charge_response_code":"00","charge_response_message":"Please enter the OTP sent to your mobile number 080****** and email te**@rave**.com","created_at":"2024-12-24T12:54:38.000Z"}
  }
  closedPaymentModal(): void {
    if (this.paymetdone) {
      console.log("payment is closed");
      this.paystackpayment(this.api.nextPayment.quote.details.transaction_ref)

      setTimeout(() => {
        this.location.back()
      }, 5000);
    }
  }

  generateReference(): string {
    let date = new Date();
    return date.getTime().toString();
  }



  getTransactionHistory() {
    this.api.showLoader();

    const myData =
      'myData={"verify_token":"' + localStorage.getItem('token') +
      '","policyId":"' + this.api.selectedPolicy.policyId +
      '","method":"getPaymentdetails"}';

    this.api.insertData(myData).subscribe(
      (res: any) => {
        this.api.hideLoader();

        console.log('getPaymentdetails==============', JSON.stringify(res));
        if (res.status_no == 1) {
          this.quoteId = res.quote.id
          this.payment_method_select(res.product.id, res.quote.id)
        }
      },
      (err) => {
        this.api.hideLoader();

        console.log(err);
      }
    );
  }


  payment_method_select(product_id, quote_id) {
    this.api.showLoader();

    const myData =
      'myData={"verify_token":"' + localStorage.getItem('token') +
      '","product_id":"' + product_id +
      '","quote_id":"' + quote_id +
      '","payment_option":"flutterwave' +
      '","method":"payment_method_select"}';


    // 'myData={"verify_token":"' + 'fJ1ur7uKfAuJ7LfX' +
    // '","product_id":"' + '2' +
    // '","quote_id":"' + '123' +
    // '","payment_option":"flutterwav' +
    // '","method":"payment_method_select"}';

    this.api.insertData(myData).subscribe(
      (res: any) => {
        this.api.hideLoader();

        console.log('payment_method_select==============', JSON.stringify(res));

        this.paystackpayment(res.transaction.transaction_ref)
        // if (res.status_no == 1) {
        //   this.nextPayment = res.nextPayment;
        //   this.pastPayment = res.pastPayment;

        //   if (this.nextPayment && this.nextPayment.length > 0) {

        //   } else {
        //     this.nextPayment = ''
        //   }

        //   if (this.pastPayment && this.pastPayment.length > 0) {

        //   } else {
        //     this.pastPayment = ''
        //   }
        // }
      },
      (err) => {
        this.api.hideLoader();

        console.log(err);
      }
    );
  }





  ionViewWillEnter() {
    // this.getTransactionHistory()
  }
}
