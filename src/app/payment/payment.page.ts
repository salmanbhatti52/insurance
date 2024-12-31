import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import * as moment from 'moment';
import { FlutterwaveService, InlinePaymentOptions, PaymentSuccessResponse } from 'flutterwave-angular-v3';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

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
  loggedInUserInfo: any = '';
  paymetdone: any = '';


  constructor(public location: Location,
    public router: Router,
    public api: InsuranceAppService,
    public navCtrl: NavController,
    public flutterwaveService: FlutterwaveService) { }
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
  paymentData: InlinePaymentOptions;

  paymentInit() {
    console.log('Payment initialized');
  }

  ngOnInit() {
    this.productres = JSON.parse(localStorage.getItem('productres'));
    console.log('productres=====', this.productres);
    this.quoteId = this.productres.quote.id
    this.trxref = this.productres.quote.transaction_ref
    this.currentdate = moment(new Date()).format('YYYY-MM-DD');
    console.log('cdate=', this.currentdate);
    var oneYearFromNow = new Date();
    var result = oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    this.enddate = moment(new Date(result)).format('YYYY-MM-DD');
    this.subprodName = localStorage.getItem('subProName');
    this.productID = localStorage.getItem('product_id');
    console.log('productId=====', this.productID);

    this.email = localStorage.getItem('email');
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));
    for (var i = 0; i < this.quoteItems.length; i++) {
      if (this.quoteItems[i].type == "currency") {
        this.priceofquote = this.quoteItems[i].value
        localStorage.setItem('priceofquote', this.priceofquote)
        this.amt = this.priceofquote + '00'
        this.amtShow = this.priceofquote


        console.log('pesyyyyyy-------', localStorage.getItem('priceofquote'));

      }
    }
    console.log('dsdasdasd', localStorage.getItem('productName'));



    this.publicKey = this.api.flutterwaveAPIKey;
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


  }


  prepareOpt() {
    console.log('amt-====' + this.quoteItems[this.quoteItems.length - 1].value)
    this.paymentData = {
      public_key: this.publicKey,
      tx_ref: this.generateReference(),
      amount: this.quoteItems[this.quoteItems.length - 1].value,
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
      // if (localStorage.getItem('subProName') == 'Third Party') {

      //   var myData = {
      //     sid: 'ECHANNEL2',
      //     token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
      //   };
      //   this.api.gibsapi(myData).subscribe(
      //     (res: any) => {
      //       this.api.hideLoader()
      //       console.log(res);
      //       let token = res.accessToken;
      //       this.getresult(token);
      //     },
      //     (err) => {
      //       console.log(err);
      //       this.api.hideLoader();
      //     }
      //   );
      //   // 'http://testcipapiservices.gibsonline.com/api/metadata/Policies/Motor' old url

      // } else {
      //   this.api.hideLoader()
      //   this.navCtrl.navigateRoot('paymentresponse')
      // }


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
  /// syed ali plz flutterwave
  paystackpayment() {
    let datasend =
      'myData={"transaction_ref":' +
      '"' + this.trxref + '"' +
      ',"flutterwave_transaction_id":' +
      '"' + this.paymetdone.tx_ref + '"' +
      ',"quote_id":' +
      '"' + this.quoteId + '"' +
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
        this.api.alertboxshow(res.message);
        // if (localStorage.getItem('productName') == 'Motor Insurance') {
        this.sendcertificate()
        // } else {
        // this.api.presenttoast(res.message)
        // this.api.alertboxshow(res.message)
        this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
        console.log(this.draftArr);

        // for (var i = 0; i < this.draftArr.length; i++) {
        //   if (this.draftArr[i].product_id == this.productID) {

        //     this.draftArr.splice(i, 1);

        //   }

        // }
        // localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
        // }

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

      // if (paymentoption == 1) {
      //   this.navCtrl.navigateForward([
      //     'payquote',
      //     {
      //       payres: JSON.stringify(res.transaction),
      //     },
      //   ]);
      // }
    }, err => {
      this.api.alertboxshow('err in certificate' + err);
      this.api.hideLoader()
    });
  }
  // getresult(Bearertoken) {
  //   this.api.showLoader()
  //   let postdata = {
  //     // default productID:1001
  //     "productID": '1001',
  //     "entryDate": this.currentdate,
  //     "startDate": this.currentdate,
  //     "endDate": this.enddate,
  //     "fxCurrency": "NGN",
  //     "fxRate": 1,
  //     "agentID": localStorage.getItem('agentcode'),
  //     "paymentAccountID": "1112000044",
  //     "insured": {
  //       "lastName": localStorage.getItem('fname'),
  //       "firstName": localStorage.getItem('lname'),
  //       "gender": this.genderVal,
  //       "email": localStorage.getItem('email'),
  //       "address": localStorage.getItem('clientAddress'),
  //       "phoneLine1": localStorage.getItem('phonenumber'),
  //       "isOrg": false,
  //       "cityLGA": "n/a",
  //       "stateID": "n/a",
  //       "nationality": "bd",
  //       "dateOfBirth": localStorage.getItem('dob'),
  //       "kycType": "NOT_AVAILABLE",
  //       "kycNumber": "n/a"
  //     },
  //     "sections": [
  //       {
  //         "sectionID": "n/a",
  //         "sectionSumInsured": 0,
  //         "sectionPremium": this.amtShow,
  //         "fields": [
  //           {
  //             "name": "VehicleRegNo",
  //             "value": localStorage.getItem('regNo')
  //           },
  //           {
  //             "name": "VehicleTypeID",
  //             "value": "JEEP"
  //           },
  //           {
  //             "name": "VehicleUser",
  //             "value": localStorage.getItem('userfullname')
  //           },
  //           {
  //             "name": "EngineNumber",
  //             "value": localStorage.getItem('engNo')

  //           },
  //           {
  //             "name": "EngineCapacityHP",
  //             "value": "2.5"
  //           },
  //           {
  //             "name": "ChasisNumber",
  //             "value": localStorage.getItem('chasisNo')
  //           },
  //           {
  //             "name": "VehicleUsage",
  //             "value": "PRIVATE"
  //           },
  //           {
  //             "name": "NumberOfSeats",
  //             "value": "1"
  //           },
  //           {
  //             "name": "stateOfIssue",
  //             "value": "Lagos"
  //           },
  //           {
  //             "name": "VehicleMake",
  //             "value": localStorage.getItem('vechilemakeval')

  //           },
  //           {
  //             "name": "VehicleModel",
  //             "value": localStorage.getItem('vechilemodelval')
  //           },
  //           {
  //             "name": "ManufactureYear",
  //             "value": localStorage.getItem('yomValue')
  //           },
  //           {
  //             "name": "VehicleColour",
  //             "value": localStorage.getItem('vehclr')
  //           },
  //           {
  //             "name": "CoverType",
  //             "value": 'THIRD_PARTY_ONLY'
  //           }
  //         ]
  //       }
  //     ]
  //   }
  //   // 'https://cors-anywhere.herokuapp.com/corsdemo/'
  //   this.api
  //     .postdata(
  //       'http://testcipapiservices.gibsonline.com/api/policies',
  //       postdata,
  //       Bearertoken
  //     )
  //     .subscribe(
  //       (res: any) => {
  //         console.log('motor response---', res);
  //         this.api.hideLoader()
  //         localStorage.setItem('gibsProductres', JSON.stringify(res));

  //         this.getcertificate(Bearertoken)

  //       },
  //       (err) => {
  //         this.api.hideLoader()
  //         console.log('errrrrrrr', err);
  //         // let errormsg = err.error.errors[0].message;
  //         // this.api.presenttoast(errormsg)
  //         this.api.presenttoast(err.message)
  //       }
  //     );
  // }

  // getcertificate(token) {
  //   this.productres = JSON.parse(localStorage.getItem('gibsProductres'));
  //   this.policyNo = this.productres.policyNo;

  //   this.api.showLoader();
  //   let encode = encodeURIComponent(this.policyNo);
  //   console.log('eee--', encode);

  //   this.api.get('http://testcipapiservices.gibsonline.com/api/utilities/send/certificate?policyNo=' + encode + '&email=' + this.email, token).subscribe((res: any) => {
  //     console.log('certificate====', res);
  //     this.api.hideLoader()
  //     this.navCtrl.navigateRoot('payment2response');
  //   }, err => {
  //     this.api.hideLoader();
  //     this.api.presenttoast('Something went wrong');
  //   })
  // }
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
        // this.paymentapi(this.paymentoption)
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

  // paymentapi(paymentoption) {
  //   let datasend = "myData={\"product_id\":" + localStorage.getItem('subProId') + ",\"quote_id\":" + localStorage.getItem('quote_id') + ",\"payment_option\":" + paymentoption + ",\"verify_token\":\"" + localStorage.getItem('token') + "\",\"method\":\"payment_method_select\"}";

  //   this.api.insertData(datasend).subscribe((res: any) => {
  //     console.log('payemt response', res);
  //     if (paymentoption == 1) {
  //       this.navCtrl.navigateForward(['payquote', {
  //         payres: JSON.stringify(res.transaction)
  //       }])
  //     }

  //   })
  // }


  makePayment() {
    console.log('makePayment,,,,,,,,,,', this.paymentData)
    this.flutterwaveService.inlinePay(this.paymentData);
  }
  makePaymentCallback(response: PaymentSuccessResponse): void {
    console.log("Payment callback", JSON.stringify(response));
    this.paymetdone = response
    this.api.presenttoast('Payment has been done succesfully.')
    this.location.back()


    //{"status":"successful","customer":{"name":"BLESSING DOE","email":"atfar@cornerstone.com.ng","phone_number":"0809765435"},"transaction_id":8289225,"tx_ref":"1735044787946","flw_ref":"FLW-MOCK-e6574da8796e025d097a836dcacaedcb","currency":"NGN","amount":60000,"charged_amount":60000,"charge_response_code":"00","charge_response_message":"Please enter the OTP sent to your mobile number 080****** and email te**@rave**.com","created_at":"2024-12-24T12:54:38.000Z"}
  }
  closedPaymentModal(): void {
    if (this.paymetdone) {
      console.log("payment is closed");

      this.paystackpayment()

      this.api.presenttoast('Payment has been done succesfully.')
      this.location.back()
    }
  }

  generateReference(): string {
    let date = new Date();
    return date.getTime().toString();
  }
}
