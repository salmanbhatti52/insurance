import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';

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
  constructor(public location: Location,
    public router: Router,
    public api: InsuranceAppService,
    public navCtrl: NavController) { }
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
  amt:any = 0
  amtShow:any = 0




  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log(this.title, ref);
  }

  paymentCancel() {
    console.log('payment failed');
  }



  ngOnInit() {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));
    for(var i = 0; i < this.quoteItems.length; i++){
      if(this.quoteItems[i].type == "currency"){
        this.priceofquote = this.quoteItems[i].value
        localStorage.setItem('priceofquote',this.priceofquote)
        this.amt =    this.priceofquote + '00'
        this.amtShow =    this.priceofquote


        console.log('pesyyyyyy-------',localStorage.getItem('priceofquote'));

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
      } else {
        if (this.payemntmethod == 'other') {
          this.paymentoption = 2;
          if (this.chooosebank == '') {
            this.api.presenttoast('Choose atleast one bank')
          } else {
            this.paymentapi(this.paymentoption)
          }
        }
      }
    }
  }

  paymentapi(paymentoption) {
    let datasend = "myData={\"product_id\":" + localStorage.getItem('subProId') + ",\"quote_id\":" + localStorage.getItem('quote_id') + ",\"payment_option\":" + paymentoption + ",\"verify_token\":\"" + localStorage.getItem('token') + "\",\"method\":\"payment_method_select\"}";

    this.api.insertData(datasend).subscribe((res: any) => {
      console.log('payemt response', res);
      if (paymentoption == 2) {
        this.navCtrl.navigateForward(['payquote', {
          payres: JSON.stringify(res.transaction)
        }])
      }

    })
  }
}
