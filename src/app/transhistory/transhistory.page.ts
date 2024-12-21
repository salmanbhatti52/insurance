import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transhistory',
  templateUrl: './transhistory.page.html',
  styleUrls: ['./transhistory.page.scss'],
})
export class TranshistoryPage implements OnInit {


  token: any;
  transactionHistory: any
  nextPayment: any = '';
  pastPayment: any = '';
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
    this.getTransactionHistory()
  }

  goback() {
    this.location.back();
  }

  nextPay(sp: any) {
    this.api.nextPayment = sp
    console.log('sp-----------', sp)
    // this.router.navigate(['nextpayment'])
  }
  seeDetails() {
    this.router.navigate(['/viewpurchasedpolicy']);
  }
  transreceipt(trans) {
    this.api.selectedTransaction = trans
    this.router.navigate(['/transreceipt']);
  }



  getTransactionHistory() {
    this.api.showLoader();

    const myData =
      'myData={"verify_token":"' + localStorage.getItem('token') +
      '","policyId":"' + this.api.selectedPolicy.policyId +
      '","method":"getTransactionHistory"}';

    // const myData =
    //   'myData={"verify_token":"' + 'z9R1RDYhPHipQGOQ' +
    //   '","policyId":"' + '2161' +
    //   '","method":"getTransactionHistory"}';

    this.api.insertData(myData).subscribe(
      (res: any) => {
        this.api.hideLoader();

        console.log('getTransactionHistory==============', res);
        if (res.status_no == 1) {
          this.nextPayment = res.nextPayment;
          this.pastPayment = res.pastPayment;

          if (this.nextPayment && this.nextPayment.length > 0) {

          } else {
            this.nextPayment = ''
          }

          if (this.pastPayment && this.pastPayment.length > 0) {

          } else {
            this.pastPayment = ''
          }
        }
      },
      (err) => {
        this.api.hideLoader();

        console.log(err);
      }
    );
  }

}

