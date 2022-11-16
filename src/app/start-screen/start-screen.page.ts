import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.page.html',
  styleUrls: ['./start-screen.page.scss'],
})
export class StartScreenPage implements OnInit {
  constructor(
    public router: Router,
    public menuCtrl: MenuController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }
  gotoSignIn() {
    this.navCtrl.navigateRoot(['/sign-in-screen']);
  }
}
