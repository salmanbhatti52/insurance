import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import * as moment from 'moment';

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

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log('payment succesfull-----', ref);
    if (ref.status == 'success') {
      this.api.showLoader()
      localStorage.setItem('trxref', ref.trxref);
      this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
      console.log(this.draftArr);

      for (var i = 0; i < this.draftArr.length; i++) {
        if (this.draftArr[i].product_id == this.productID) {

          this.draftArr.splice(i, 1);

        }

      }
      localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
      if (localStorage.getItem('subProName') == 'Third Party') {

        var myData = {
          sid: 'ECHANNEL2',
          token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
        };
        this.api.gibsapi(myData).subscribe(
          (res: any) => {
            this.api.hideLoader()
            console.log(res);
            let token = res.accessToken;
            this.getresult(token);
          },
          (err) => {
            console.log(err);
            this.api.hideLoader();
          }
        );
        // 'http://testcipapiservices.gibsonline.com/api/metadata/Policies/Motor' old url

      } else {
        this.api.hideLoader()
        this.navCtrl.navigateRoot('paymentresponse')
      }


    }

  }
  getresult(Bearertoken) {
    this.api.showLoader()
    let postdata = {
      // default productID:1001
      "productID": '1001',
      "entryDate": this.currentdate,
      "startDate": this.currentdate,
      "endDate": this.enddate,
      "fxCurrency": "NGN",
      "fxRate": 1,
      "agentID": localStorage.getItem('agentcode'),
      "paymentAccountID": "1112000044",
      "insured": {
        "lastName": localStorage.getItem('fname'),
        "firstName": localStorage.getItem('lname'),
        "gender": this.genderVal,
        "email": localStorage.getItem('email'),
        "address": localStorage.getItem('clientAddress'),
        "phoneLine1": localStorage.getItem('phonenumber'),
        "isOrg": false,
        "cityLGA": "n/a",
        "stateID": "n/a",
        "nationality": "bd",
        "dateOfBirth": localStorage.getItem('dob'),
        "kycType": "NOT_AVAILABLE",
        "kycNumber": "n/a"
      },
      "sections": [
        {
          "sectionID": "n/a",
          "sectionSumInsured": 0,
          "sectionPremium": this.amtShow,
          "fields": [
            {
              "name": "VehicleRegNo",
              "value": localStorage.getItem('regNo')
            },
            {
              "name": "VehicleTypeID",
              "value": "JEEP"
            },
            {
              "name": "VehicleUser",
              "value": localStorage.getItem('userfullname')
            },
            {
              "name": "EngineNumber",
              "value": localStorage.getItem('engNo')

            },
            {
              "name": "EngineCapacityHP",
              "value": "2.5"
            },
            {
              "name": "ChasisNumber",
              "value": localStorage.getItem('chasisNo')
            },
            {
              "name": "VehicleUsage",
              "value": "PRIVATE"
            },
            {
              "name": "NumberOfSeats",
              "value": "1"
            },
            {
              "name": "stateOfIssue",
              "value": "Lagos"
            },
            {
              "name": "VehicleMake",
              "value": localStorage.getItem('vechilemakeval')

            },
            {
              "name": "VehicleModel",
              "value": localStorage.getItem('vechilemodelval')
            },
            {
              "name": "ManufactureYear",
              "value": localStorage.getItem('yomValue')
            },
            {
              "name": "VehicleColour",
              "value": localStorage.getItem('vehclr')
            },
            {
              "name": "CoverType",
              "value": 'THIRD_PARTY_ONLY'
            }
          ]
        }
      ]
    }
    // 'https://cors-anywhere.herokuapp.com/corsdemo/'
    this.api
      .postdata(
        'http://testcipapiservices.gibsonline.com/api/policies',
        postdata,
        Bearertoken
      )
      .subscribe(
        (res: any) => {
          console.log('motor response---', res);
          this.api.hideLoader()
          localStorage.setItem('gibsProductres', JSON.stringify(res));

          this.getcertificate(Bearertoken)

        },
        (err) => {
          this.api.hideLoader()
          console.log('errrrrrrr', err);
          // let errormsg = err.error.errors[0].message;
          // this.api.presenttoast(errormsg)
          this.api.presenttoast(err.message)
        }
      );
  }

  getcertificate(token) {
    this.productres = JSON.parse(localStorage.getItem('gibsProductres'));
    this.policyNo = this.productres.policyNo;

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
  paymentCancel() {
    console.log('payment failed');
  }



  ngOnInit() {
    this.currentdate = moment(new Date()).format('YYYY-MM-DD');
    console.log('cdate=', this.currentdate);
    var oneYearFromNow = new Date();
    var result = oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    this.enddate = moment(new Date(result)).format('YYYY-MM-DD');
    this.subprodName = localStorage.getItem('subProName');
    this.productID = localStorage.getItem('product_id');
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
        this.paymentapi(this.paymentoption)
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

  paymentapi(paymentoption) {
    let datasend = "myData={\"product_id\":" + localStorage.getItem('subProId') + ",\"quote_id\":" + localStorage.getItem('quote_id') + ",\"payment_option\":" + paymentoption + ",\"verify_token\":\"" + localStorage.getItem('token') + "\",\"method\":\"payment_method_select\"}";

    this.api.insertData(datasend).subscribe((res: any) => {
      console.log('payemt response', res);
      if (paymentoption == 1) {
        this.navCtrl.navigateForward(['payquote', {
          payres: JSON.stringify(res.transaction)
        }])
      }

    })
  }
}
