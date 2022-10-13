import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
import { AgentidpopupPage } from '../agentidpopup/agentidpopup.page';
@Component({
  selector: 'app-explore-screen-before-login',
  templateUrl: './explore-screen-before-login.page.html',
  styleUrls: ['./explore-screen-before-login.page.scss'],
})
export class ExploreScreenBeforeLoginPage implements OnInit {
  show = false;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  userID: any;
  constructor(public router: Router, public navCtrl: NavController, public menuCtrl: MenuController,
    public modal: ModalController) {
    this.userID = localStorage.getItem('userid')
    console.log(this.userID, 'dsadsadddddddddd----');

  }

  openMenu() {
    console.log('open menu');
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    // this.RegisterForm.reset();
  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(false);
  }

  profileupdate() {
    if (this.userID == null) {
      this.navCtrl.navigateRoot('sign-in-screen')
    } else {
      this.navCtrl.navigateRoot('profile-update')
    }
  }
  insured() {
    if (this.userID == null) {
      this.navCtrl.navigateRoot('sign-in-screen')
    } else {
      this.navCtrl.navigateRoot('home-page-screen-after-login')
    }
  }
  ReportaClaim() {
    if (this.userID == null) {
      this.navCtrl.navigateRoot('sign-in-screen')
    } else {
      this.navCtrl.navigateRoot('makeaclaim')
    }
  }
  RenewPolicy() {
    if (this.userID == null) {
      this.navCtrl.navigateRoot('sign-in-screen')
    } else {
      this.navCtrl.navigateRoot('verify-policy-screen-cust')
    }
  }
  async agentlogin() {
    const modal = await this.modal.create({
      component: AgentidpopupPage,
      cssClass: 'AgentPopupclass',
    });

    return await modal.present();
  }
  verifyPolicy() {
    if (this.userID == null) {
      this.navCtrl.navigateRoot('sign-in-screen')
    } else {
      this.navCtrl.navigateRoot('policylookup')
    }
  }
  getintouch() {

    this.navCtrl.navigateRoot('contactus')

  }
  tab1Click() {
    this.navCtrl.navigateRoot('sign-up-screen');
  }
  tab2Click() {
    this.navCtrl.navigateRoot('home-page-screen-after-login');
  }
  tab3Click() {
    this.navCtrl.navigateRoot('sign-in-screen');
  }
  toogleShow() {
    this.show = !this.show;
  }
  signInScreen() {
    this.router.navigate(['/sign-in-screen']);
  }
  signUpScreen() {
    this.router.navigate(['/sign-up-screen']);
  }
}
