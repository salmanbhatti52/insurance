import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
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
  constructor(public router:Router,public navCtrl:NavController, public menuCtrl:MenuController) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
    // this.RegisterForm.reset();
  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }
  tab1Click(){
    // this.navCtrl.navigateRoot('explore-screen-before-login-expanded');
  }
  tab2Click(){
    this.navCtrl.navigateRoot('home-page-screen-after-login')
  }
  tab3Click(){
    // this.navCtrl.navigateRoot('contactus');
  }
  toogleShow(){
    this.show= !this.show
  }
  signInScreen(){
    this.router.navigate(['/sign-in-screen']);
  }
  signUpScreen(){
    this.router.navigate(['/sign-up-screen']);
  }
}
