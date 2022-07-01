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
  constructor(public navCtrl: NavController,public router:Router, public location:Location) { }

  ngOnInit() {
  }
  toogleShow(){
    this.show= !this.show
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
    this.location.back();
  }
}
