import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policypaymentdetail',
  templateUrl: './policypaymentdetail.page.html',
  styleUrls: ['./policypaymentdetail.page.scss'],
})
export class PolicypaymentdetailPage implements OnInit {


  token: any;
  transactionHistory: any
  quouteDetail: any;
  quoute: any;
  constructor(
    public location: Location,
    private http: HttpClient,
    public api: InsuranceAppService,
    public navctrl: NavController,
    public iab: InAppBrowser,
    public router: Router
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
    this.getPaymentdetails()
  }

  goback() {
    this.location.back();
  }


  seeDetails() {
    this.router.navigate(['/viewpurchasedpolicy']);
  }
  transreceipt(trans) {
    this.api.selectedTransaction = trans
    this.router.navigate(['/transreceipt']);
  }



  getPaymentdetails() {
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
          this.transactionHistory = res;
          this.quouteDetail = this.transactionHistory.quote.details
          this.quoute = this.transactionHistory.quote
        }
      },
      (err) => {
        this.api.hideLoader();

        console.log(err);
      }
    );
  }

}

