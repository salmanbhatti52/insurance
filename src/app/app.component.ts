/* eslint-disable max-len */

import { AlertController, MenuController, NavController, Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { InsuranceAppService } from './services/insurance-app.service';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';

import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home-page-screen-after-login', img: '/assets/images/home.svg', img1: '/assets/images/homeicon.svg', status: 'unchecked' },
    // { title: 'Dashboard', url: 'dashboard', img: '/assets/images/icons/chart.svg', img1: '/assets/images/icons/dashboard.svg', status: 'unchecked' },
    { title: 'Retrieve Quote', url: '/get-quote', img: '/assets/images/icons/quote.svg', img1: '/assets/images/icons/activequote.svg', status: 'unchecked' },
    // { title: 'My Policy', url: 'mypolicies', img: '/assets/images/icons/mypolicy.svg', img1: '/assets/images/icons/activemypolicy.svg', status: 'unchecked' },
    // { title: 'My Policies', url: 'verify-policy-screen-cust', img: '/assets/images/icons/policy.svg', img1: '/assets/images/icons/activepolicy.svg', status: 'unchecked' },
    { title: 'Verify Policy', url: 'policylookup', img: '/assets/images/icons/mypolicy.svg', img1: '/assets/images/icons/activemypolicy.svg', status: 'unchecked' },
    { title: 'Renewals', url: 'verify-policy-screen-cust', img: '/assets/images/icons/renewals.svg', img1: '/assets/images/icons/activerenewls.svg', status: 'unchecked' },
    { title: 'Make a Claim', url: '/makeaclaim', img: '/assets/images/icons/claim.svg', img1: '/assets/images/icons/activeclaim.svg', status: 'unchecked' },
    { title: 'Settings', url: '/settings', img: '/assets/images/icons/setting.svg', img1: '/assets/images/icons/settingactive.svg', status: 'unchecked' },
  ];
  public appPages2 = [
    // { title: 'Home', url: '/home-page-screen-after-login', img: '/assets/images/home.svg', img1: '/assets/images/homeicon.svg', status: 'unchecked' },
    { title: 'Dashboard', url: 'dashboard', img: '/assets/images/icons/chart.svg', img1: '/assets/images/icons/dashboard.svg', status: 'unchecked' },
    { title: 'Get Quote', url: '/get-quote', img: '/assets/images/icons/quote.svg', img1: '/assets/images/icons/activequote.svg', status: 'unchecked' },
    // { title: 'My Policy', url: 'mypolicies', img: '/assets/images/icons/mypolicy.svg', img1: '/assets/images/icons/activemypolicy.svg', status: 'unchecked' },
    { title: 'My Policies', url: 'allpolicies', img: '/assets/images/icons/policy.svg', img1: '/assets/images/icons/activepolicy.svg', status: 'unchecked' },
    { title: 'Verify Policy', url: 'policylookup', img: '/assets/images/icons/mypolicy.svg', img1: '/assets/images/icons/activemypolicy.svg', status: 'unchecked' },
    { title: 'Renewals', url: 'verify-policy-screen-cust', img: '/assets/images/icons/renewals.svg', img1: '/assets/images/icons/activerenewls.svg', status: 'unchecked' },
    { title: 'Make a Claim', url: '/makeaclaim', img: '/assets/images/icons/claim.svg', img1: '/assets/images/icons/activeclaim.svg', status: 'unchecked' },
    // { title: 'Settings', url: '/settings', img: '/assets/images/icons/setting.svg', img1: '/assets/images/icons/settingactive.svg', status: 'unchecked' },
  ];

  selectedtitle: any;
  fp: any;
  result: string;
  // loginas: any;
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public alert: AlertController,
    public api: InsuranceAppService,
    public route: Router,
    public platform: Platform,
    private actionSheetCtrl: ActionSheetController) {


    // if (localStorage.getItem('userid') != null) {
    //   this.route.navigate(['home-page-screen-after-login']);
    // } else {
    //   this.route.navigate(['sign-in-screen']);
    // }




  }

  ngOnInit() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.initializeApp();

        SplashScreen.hide();
        // this.route.navigate(['splash']);
      }, 3500);

    });

  }

  async initializeApp() {
    // this.loginas = localStorage.getItem('loginas')
    // this.fp = localStorage.getItem('fingerprint');
    // console.log('fingerprint====', this.fp);
    // this.api.fpval = this.fp



  }


  selected(p) {
    this.appPages.map((value) => {
      value.status = 'unchecked';
    });
    console.log('stataus--', p.status);


    p.status = 'checked';

  }
  closeMenu() {
    this.menuCtrl.close();
  }

  // toogle(ev) {


  //   console.log(ev);
  //   if (ev.detail.checked == true) {

  //     this.api.fpval = 'true'
  //     localStorage.setItem('fingerprint', 'true')
  //   } else {
  //     this.api.fpval = 'false';
  //     localStorage.setItem('fingerprint', 'false')
  //   }

  // }
  async logout() {
    const alert = await this.alert.create({
      header: "Are you ready to log out?",
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.menuCtrl.close();
          },
        },
        {
          text: "Yes",
          role: 'confirm',
          handler: () => {
            localStorage.removeItem('userid');
            localStorage.removeItem('token');

            console.log('userid==', localStorage.getItem('userid'));
            console.log('token==', localStorage.getItem('token'));
            localStorage.removeItem('loginas');
            this.api.presenttoast('You are successfully logged out!');
            let fp = localStorage.getItem('fingerprint')
            if (fp == 'false') {
              localStorage.removeItem('fingerprint')
            }
            this.menuCtrl.close();
            this.navCtrl.navigateRoot('sign-in-screen');
          },
        },
      ],
    });

    await alert.present();

  }


}
