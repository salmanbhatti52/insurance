import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewpurchasedpolicy',
  templateUrl: './viewpurchasedpolicy.page.html',
  styleUrls: ['./viewpurchasedpolicy.page.scss'],
})
export class ViewpurchasedpolicyPage implements OnInit {

  token: any;
  purchasedPolicy: any
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
    this.getPurchasedPolicies()
  }

  goback() {
    this.api.isFrom = ''
    if (this.api.isFrom == 'accident') {
      this.router.navigate(['/home-page-screen-after-login'], { replaceUrl: true });
    } else {
      this.location.back();
    }


  }


  seeDetails() {
    this.router.navigate(['/viewpurchasedpolicy']);
  }
  policyBtn(policy) {
    this.api.selectedPolicy = policy
    this.router.navigate(['/policybtn']);
  }




  purchaseNewPolicy() {
    const browser = this.iab.create(
      'https://webchat.ebanqo.io/cornerstone',
      '_blank'
    );
  }


  getPurchasedPolicies() {
    this.api.showLoader();

    const myData =
      'myData={"verify_token":"' +
      localStorage.getItem('token') +
      '","method":"getPurchasedPolicies"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
        this.api.hideLoader();

        console.log('getPurchasedPolicies==============', res);
        if (res.status_no == 1) {
          this.purchasedPolicy = res.purchasePolicies;
        }
      },
      (err) => {
        this.api.hideLoader();

        console.log(err);
      }
    );
  }

}

