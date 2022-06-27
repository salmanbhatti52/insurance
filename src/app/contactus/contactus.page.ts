import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
  cname:string = '';
  constructor(public navCtrl:NavController,
    public router: Router) { }

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
    this.router.navigate(['/profile-update']);
  }
}
