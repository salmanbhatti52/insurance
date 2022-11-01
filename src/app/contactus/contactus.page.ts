import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
  cname: string = '';
  userId: any;
  constructor(public navCtrl: NavController,
    public router: Router,
    public location: Location,
    public iab:InAppBrowser,
    public platform:Platform) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userid');
    console.log('userid====', this.userId);

    if (this.userId === null) {
      this.cname == ''
    } else {
      this.cname = localStorage.getItem('fname');
    }
  }
  goBack() {
    this.location.back();
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

  fb(){
    const browser = this.iab.create('https://www.facebook.com/CornerstoneInsuranceplc?_rdc=1&_rdr');
  }
  tw(){
    const browser = this.iab.create('https://twitter.com/cornerstone_ng');
  }
  inst(){
    const browser = this.iab.create('https://www.instagram.com/cornerstone_ng/');
  }
  yt(){
    const browser = this.iab.create('https://www.youtube.com/user/Cornerstoneplc');
  }

  openwebpage(){
    const browser = this.iab.create('https://www.cornerstone.com.ng');
  }

  public openMapsApp(lat,lng) {
    // window.open("https://www.google.com/maps/search/?api=1&query=6.424580,3.441100")
    var geocoords = lat + ',' + lng;

    if (this.platform.is("ios")) {
      window.open('maps://?q=' + geocoords, '_system');
    }
    else {
      var label = encodeURI('7 East Street'); // encode the label!
      window.open('geo:0,0?q=' + geocoords + '(' + label + ')', '_system');

      // window.open("https://www.google.com/maps/search/?api=1&query=" + geocoords)
    }
  }
}
