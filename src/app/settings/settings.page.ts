import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public location: Location,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  goback() {
    this.location.back();
  }

  privacy() {
    this.navCtrl.navigateForward('privacypolicy')

  }

  finger(){
   this.navCtrl.navigateForward('privacy')

  }

  languagepage() {
    this.navCtrl.navigateForward('languagepage')
  }

  notification() {
    this.navCtrl.navigateForward('notification')
  }

  help() {
    this.navCtrl.navigateForward('helppage')
  }

  deleteaccount() {
    this.navCtrl.navigateForward('deleteaccount')
  }


}
