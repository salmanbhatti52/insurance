import { InsuranceAppService } from './../services/insurance-app.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionSheetController,
  MenuController,
  NavController,
  Platform,
} from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-explore-screen-before-login-expanded',
  templateUrl: './explore-screen-before-login-expanded.page.html',
  styleUrls: ['./explore-screen-before-login-expanded.page.scss'],
})
export class ExploreScreenBeforeLoginExpandedPage implements OnInit {
  show = false;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  btnshow = false;
  result: any;
  products: any;
  constructor(
    public navCtrl: NavController,
    public router: Router,
    public location: Location,
    public actionSheetCtrl: ActionSheetController,
    public api: InsuranceAppService,
    public menuCtrl: MenuController,
    public iab: InAppBrowser,
    public platform: Platform
  ) {}

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    if (localStorage.getItem('userid') == null) {
      this.api.presenttoast('Please Login First');
      this.router.navigate(['/sign-in-screen']);
    } else {
      this.getProducts();
    }
  }

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

  gotorenewpolicy() {
    this.router.navigate(['/verify-policy-screen-cust']);
  }

  makeaclaim() {
    this.router.navigate(['/makeaclaim']);
  }

  policylookup() {
    this.router.navigate(['/policylookup']);
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

  getProducts() {
    const myData =
      'myData={"verify_token":"' +
      localStorage.getItem('token') +
      '","method":"get_avilable_products"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
        console.log(res);
        if (res.message == 'success') {
          this.products = res.myproduct;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  investmentsubProducts() {
    this.router.navigate(['/sub-products']);
  }
  openProduct(product, comingFrom) {
    console.log('seleted product', product);
    localStorage.setItem('productName', product.name);
    localStorage.setItem('productid', product.id);
    this.subProducts(product.id, comingFrom);
  }

  subProducts(id, comingFrom) {
    const myData =
      'myData={"verify_token":"' +
      localStorage.getItem('token') +
      '","product_id":"' +
      id +
      '","method":"get_avilable_subproducts"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
        const subproducts = [];
        console.log('subProducts---------', res);
        res.subproducts.map((value, index) => {
          //old code..
          // if (value.name != "Local Travel Insurance" && value.name != "Pilgrimage Plans" && value.name != "Student Plan" && value.name != "Europe / Shengen" && value.name != 'Enhanced Comprehensive' && value.name != 'Auto Variants') {
          //   subproducts.push(value);
          // }
          //new code to add local travel insurance
          if (
            value.name != 'Pilgrimage Plans' &&
            value.name != 'Student Plan' &&
            value.name != 'Europe / Shengen' &&
            value.name != 'Enhanced Comprehensive' &&
            value.name != 'Auto Variants'
          ) {
            subproducts.push(value);
          }
        });
        console.log('subproducts after check---', subproducts);
        // return;
        localStorage.setItem('subProducts', JSON.stringify(subproducts));
        this.PopupCust(comingFrom);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  PopupCust(comingFrom) {
    this.api.comingFrom = comingFrom;

    this.router.navigate(['/quote-popup']);
  }

  handleImgError(ev: any, item: any, url) {
    const source = ev.srcElement;
    const imgSrc = `assets/images/travel.svg`;
    source.src = imgSrc;
  }

  handleImgError2(ev: any, item: any, url) {
    const source = ev.srcElement;
    const imgSrc = `assets/images/car.svg`;
    source.src = imgSrc;
  }
}
