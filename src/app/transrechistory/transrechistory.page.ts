import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transrechistory',
  templateUrl: './transrechistory.page.html',
  styleUrls: ['./transrechistory.page.scss'],
})
export class TransrechistoryPage implements OnInit {


  token: any;
  transactionHistory: any
  constructor(
    public location: Location,
    private http: HttpClient,
    public api: InsuranceAppService,
    public navctrl: NavController,
    public iab: InAppBrowser,
    public router: Router,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
    this.getTransactionHistoryForReceipt()
  }

  goback() {
    this.location.back();
  }


  seeDetails() {
    this.router.navigate(['/viewpurchasedpolicy']);
  }
  async transreceipt(trans) {
    this.api.selectedTransaction = trans


    const alert = await this.alertCtrl.create({
      header: 'Download Confirmation',
      mode: "ios",
      backdropDismiss: false,
      message: 'Are you sure you want to download Receipt?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.getTransactionReceipt()
          }
        }
      ]
    });

    await alert.present();
  }



  getTransactionHistoryForReceipt() {
    this.api.showLoader();

    const myData =
      'myData={"verify_token":"' + localStorage.getItem('token') +
      '","policyId":"' + this.api.selectedPolicy.policyId +
      '","method":"getTransactionHistoryForReceipt"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
        this.api.hideLoader();

        console.log('getTransactionHistoryForReceipt==============', res);
        if (res.status_no == 1) {
          this.transactionHistory = res.transactionHistory;
        }
      },
      (err) => {
        this.api.hideLoader();

        console.log(err);
      }
    );
  }



  getTransactionReceipt() {
    this.api.showLoader();

    console.log('getTransactionReceipt==============', this.api.selectedTransaction);


    const myData =
      'myData={"verify_token":"' + localStorage.getItem('token') +
      '","transRef":"' + this.api.selectedTransaction.transactionReference +
      '","method":"getTransactionReceipt"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
        this.api.hideLoader();

        console.log('getTransactionReceipt==============', res);
        if (res.status_no == 1) {
          // this.transReceipt = res.receiptURL;
          // this.open(this.transReceipt)

          const browser = this.iab.create(
            res.receiptURL,
            '_blank'
          );


        }
      },
      (err) => {
        this.api.hideLoader();

        console.log(err);
      }
    );
  }

}

