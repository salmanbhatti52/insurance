import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policybtn',
  templateUrl: './policybtn.page.html',
  styleUrls: ['./policybtn.page.scss'],
})
export class PolicybtnPage implements OnInit {

  token: any;
  accountStatement: any = '';
  policyCertif: any = '';
  constructor(
    public location: Location,
    private http: HttpClient,
    public api: InsuranceAppService,
    public navctrl: NavController,
    public iab: InAppBrowser,
    public router: Router,
    public alertCtrl: AlertController
  ) {
    this.refresh()
  }

  refresh() {
    this.getIESAccountStatement()
  }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }

  goback() {
    this.location.back();
  }


  seeDetails() {
    this.router.navigate(['/viewpurchasedpolicy']);
  }

  purchaseNewPolicy() {
    const browser = this.iab.create(
      'https://webchat.ebanqo.io/cornerstone',
      '_system'
    );
  }



  policyStatement() {
    // this.router.navigate(['/policystatement']);
    const browser = this.iab.create(
      this.accountStatement,
      '_system'
    );

  }
  paymentDetail() {
    this.router.navigate(['/policypaymentdetail']);
  }
  transactionHistory() {
    this.router.navigate(['/transhistory']);
  }
  policyCertificate() {
    console.log('policycertificate')
    this.router.navigate(['/policycertificate']);

  }
  receiptHistory() {
    this.router.navigate(['/transrechistory']);
  }



  getIESAccountStatement() {
    this.api.showLoader()

    console.log('getIESAccountStatement==============', this.api.selectedTransaction);
    const myData =
      'myData={"verify_token":"' + localStorage.getItem('token') +
      '","policyId":"' + this.api.selectedPolicy.policyId +
      '","method":"getIESAccountStatement"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
        this.api.hideLoader()

        console.log('getIESAccountStatement==============', res);

        if (res.status_no == 1) {
          this.accountStatement = res.receiptURL;
        } else {

        }
      },
      (err) => {
        this.api.hideLoader()
        console.log(err);
      }
    );
  }


  getPolicyCertificate() {
    this.api.showLoader();

    console.log('getPolicyCertificate==============', this.api.selectedTransaction);


    const myData =
      'myData={"verify_token":"' + localStorage.getItem('token') +
      '","policyId":"' + this.api.selectedPolicy.policyId +
      '","method":"getPolicyCertificate"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
        this.api.hideLoader();


        console.log('getPolicyCertificate==============', res);

        if (res.status_no == 1) {
          this.policyCertif = res.receiptURL;
          const browser = this.iab.create(
            this.policyCertif,
            '_system'
          );
        } else {
          this.api.presenttoast(res.message)
        }
      },
      (err) => {
        this.api.hideLoader();
        console.log(err);
      }
    );
  }


  async confirmationDownloadCertificate() {
    const alert = await this.alertCtrl.create({
      header: 'Download Confirmation',
      mode: "ios",
      backdropDismiss: false,
      message: 'Are you sure you want to download Policy Certificate?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.getPolicyCertificate()
          }
        }
      ]
    });

    await alert.present();
  }



  async confirmationDownloadStatement() {
    const alert = await this.alertCtrl.create({
      header: 'Download Confirmation',
      mode: "ios",
      backdropDismiss: false,
      message: 'Are you sure you want to download Policy Statement?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.getIESAccountStatement()
          }
        }
      ]
    });

    await alert.present();
  }


}
