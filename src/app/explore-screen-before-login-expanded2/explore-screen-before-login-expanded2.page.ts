import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import {
  ActionSheetController,
  MenuController,
  NavController,
  Platform,
} from '@ionic/angular';

@Component({
  selector: 'app-explore-screen-before-login-expanded2',
  templateUrl: './explore-screen-before-login-expanded2.page.html',
  styleUrls: ['./explore-screen-before-login-expanded2.page.scss'],
})
export class ExploreScreenBeforeLoginExpanded2Page implements OnInit {
  show = false;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  btnshow = false;
  result: any;
  constructor(
    public navCtrl: NavController,
    public router: Router,
    public location: Location,
    public actionSheetCtrl: ActionSheetController,
    public menuCtrl: MenuController,
    public platform: Platform,
    public iab: InAppBrowser
  ) {}

  ngOnInit() {
    if (localStorage.getItem('userid') == null) {
      this.btnshow = false;
    } else {
      this.btnshow = true;
    }
  }

  claim() {
    // this.navCtrl.navigateForward('makeaclaim')
  }
  toogleShow() {
    this.show = !this.show;
  }
  tab1Click() {
    this.navCtrl.navigateRoot('explore-screen-before-login-expanded');
  }
  tab2Click() {
    this.navCtrl.navigateRoot('home-page-screen-after-login');
  }
  async tab3Click() {
    if (this.platform.is('android')) {
      this.router.navigate(['/contactus']);
    } else {
      const actionSheet = await this.actionSheetCtrl.create({
        buttons: [
          {
            text: 'Chat with an agent',
            data: {
              action: 'chat',
            },
          },
          {
            text: 'Make Enquiry',
            data: {
              action: 'chat',
            },
          },
          {
            text: 'Our Locations',
            data: {
              action: 'location',
            },
          },
        ],
      });

      await actionSheet.present();
      const result = await actionSheet.onDidDismiss();
      this.result = JSON.stringify(result, null, 2);
      console.log('res----', result);
      if (result.data.action == 'location') {
        this.navCtrl.navigateRoot('contactus');
      }

      if (result.data.action == 'chat') {
        const browser = this.iab.create(
          'https://webchat.ebanqo.io/cornerstone',
          '_blank'
        );
      }
    }
  }
  updateProfile() {
    this.router.navigate(['/profile-update']);
  }

  learnmore() {
    this.router.navigate(['/claimassistance']);
  }

  learnmore2() {
    this.router.navigate(['/claimassistance2']);
  }

  learnmore3() {
    this.router.navigate(['/claimassistance3']);
  }

  async presentActionSheet() {
    this.navCtrl.navigateRoot('contactus');
    // const actionSheet = await this.actionSheetCtrl.create({
    //   buttons: [
    // {
    //   text: 'Chat with an agent',
    //   data: {
    //     action: 'caht',
    //   },
    // },
    // {
    //   text: 'Make Enquiry',
    //   data: {
    //     action: 'enquiry',
    //   },
    // },
    //     {
    //       text: 'Our Locations',
    //       data: {
    //         action: 'location',
    //       },
    //     }
    //   ],
    // });

    // await actionSheet.present();
    // const result = await actionSheet.onDidDismiss();
    // this.result = JSON.stringify(result, null, 2);
    // console.log('res----',result);
    // if(result.data.action == 'location'){
    //   this.navCtrl.navigateRoot('contactus');
    // }
  }

  gotologin() {
    this.navCtrl.navigateRoot('sign-in-screen');
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }
}
