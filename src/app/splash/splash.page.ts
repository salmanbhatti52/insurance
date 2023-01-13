import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }

  constructor(public menuCtrl: MenuController, public navCtrl: NavController) {
    setTimeout(() => {
      if (localStorage.getItem('userid') == null) {
        this.navCtrl.navigateRoot(['start-screen']);
      } else {
        if (localStorage.getItem('loginas') == 'user') {
          this.navCtrl.navigateRoot(['home-page-screen-after-login']);
        } else {
          this.navCtrl.navigateRoot(['dashboard']);
        }
      }
    }, 3000);
  }

  ngOnInit() { }
}
