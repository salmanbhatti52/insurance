import { Location } from '@angular/common';
import { MenuController, NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { InsuranceAppService } from './services/insurance-app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: 'dashboard', img: '/assets/images/icons/chart.svg', img1: '/assets/images/icons/dashboard.svg', status: 'unchecked' },
    { title: 'Get Quote', url: '/get-quote', img: '/assets/images/icons/quote.svg', img1: '/assets/images/icons/activequote.svg', status: 'unchecked' },
    { title: 'My Policy', url: 'mypolicies', img: '/assets/images/icons/mypolicy.svg', img1: '/assets/images/icons/activemypolicy.svg', status: 'unchecked' },
    { title: 'Verify Policy', url: 'verify-policy-screen-cust', img: '/assets/images/icons/policy.svg', img1: '/assets/images/icons/activepolicy.svg', status: 'unchecked' },
    { title: 'Renewals', url: 'renewals', img: '/assets/images/icons/renewals.svg', img1: '/assets/images/icons/activerenewls.svg', status: 'unchecked' },
    { title: 'Make a Claim', url: '/make-a-claim', img: '/assets/images/icons/claim.svg', img1: '/assets/images/icons/activeclaim.svg', status: 'unchecked' },
  ];

  selectedtitle: any;
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public api: InsuranceAppService,
    public route: Router) {


    // if (localStorage.getItem('userid') != null) {
    //   this.route.navigate(['home-page-screen-after-login'])
    // } else {
    //   this.route.navigate(['sign-in-screen'])
    // }
  }



  selected(p) {
    this.appPages.map((value) => {
      value.status = 'unchecked'
    })
    console.log('stataus--', p.status);


    p.status = 'checked'

  }
  closeMenu() {
    this.menuCtrl.close();
  }
  logout() {
    localStorage.removeItem('userid');
    localStorage.removeItem('token');
    localStorage.removeItem('password');
    console.log('userid==', localStorage.getItem('userid'));
    console.log('token==', localStorage.getItem('token'));
    this.api.presenttoast('You are successfully logged out!');
    this.menuCtrl.close();
    this.navCtrl.navigateRoot('sign-in-screen');
  }
}
