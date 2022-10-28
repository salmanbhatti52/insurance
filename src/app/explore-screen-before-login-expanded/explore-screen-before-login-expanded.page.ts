import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-explore-screen-before-login-expanded',
  templateUrl: './explore-screen-before-login-expanded.page.html',
  styleUrls: ['./explore-screen-before-login-expanded.page.scss'],
})
export class ExploreScreenBeforeLoginExpandedPage implements OnInit {
  show = false;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  btnshow = false;
  constructor(public navCtrl: NavController, public router: Router, public location: Location) { }

  ngOnInit() {
    if (localStorage.getItem('userid') == null) {
      this.btnshow = false
    } else {
      this.btnshow = true
    }
  }

  claim() {
    // this.navCtrl.navigateForward('makeaclaim')
  }
  toogleShow() {
    this.show = !this.show
  }
  tab1Click() {
    this.navCtrl.navigateRoot('explore-screen-before-login-expanded');
  }
  tab2Click() {
    this.navCtrl.navigateRoot('home-page-screen-after-login')
  }
  tab3Click() {
    this.navCtrl.navigateRoot('contactus');
  }
  updateProfile() {
    this.router.navigate(['/profile-update']);
  }

  learnmore() {
    this.router.navigate(['/claimassistance']);
  }
}
