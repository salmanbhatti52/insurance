import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

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

  constructor(public router: Router, public menuCtrl: MenuController) {
    setTimeout(() => {
      if (localStorage.getItem('userid') == null) {
        this.router.navigate(['start-screen']);
      } else {
        if (localStorage.getItem('loginas') == 'user') {
          this.router.navigate(['home-page-screen-after-login']);
        } else {
          this.router.navigate(['dashboard']);
        }
      }
    }, 3000);
  }

  ngOnInit() {}
}
