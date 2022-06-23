import { MenuController, NavController } from '@ionic/angular';
import { Component } from '@angular/core';
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
    public menuCtrl: MenuController) { }

  selected(p) {
    this.appPages.map((value) => {
      value.status = 'unchecked'
    })
    console.log('stataus--', p.status);


    p.status = 'checked'

  }
  closeMenu(){
    this.menuCtrl.close();
  }
  logout() {
    this.menuCtrl.close();
    this.navCtrl.navigateRoot('sign-in-screen');
  }
}
