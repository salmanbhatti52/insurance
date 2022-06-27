import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-home-page-screen-after-login',
  templateUrl: './home-page-screen-after-login.page.html',
  styleUrls: ['./home-page-screen-after-login.page.scss'],
})
export class HomePageScreenAfterLoginPage implements OnInit {
slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(public navCtrl:NavController, public menuCtrl:MenuController) { }

  ngOnInit() {
  }
  tab1Click(){
    this.navCtrl.navigateRoot('explore-screen-before-login-expanded');
  }
  tab2Click(){
    this.navCtrl.navigateRoot('home-page-screen-after-login')
  }
  tab3Click(){
    this.navCtrl.navigateRoot('contactus');
  }
  updateProfile(){
    this.navCtrl.navigateRoot('profile-update');
  }
}
