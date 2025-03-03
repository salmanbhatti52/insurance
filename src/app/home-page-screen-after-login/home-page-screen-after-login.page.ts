import { Component, OnInit } from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  MenuController,
  NavController,
  Platform,
} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { QuotePopupPage } from '../quote-popup/quote-popup.page';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

import * as moment from 'moment';

@Component({
  selector: 'app-home-page-screen-after-login',
  templateUrl: './home-page-screen-after-login.page.html',
  styleUrls: ['./home-page-screen-after-login.page.scss'],
})
export class HomePageScreenAfterLoginPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  products: any;
  username: any;
  loginas: string;
  result: string;
  draftArr: any = '';
  calclatedtime: any = '';
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public router: Router,
    public modal: ModalController,
    public api: InsuranceAppService,
    public alert: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    public iab: InAppBrowser
  ) { }

  ngOnInit() { }
  ionViewWillEnter() {
    this.loginas = localStorage.getItem('loginas');
    this.username = localStorage.getItem('fname');
    this.api.username = this.username;

    if (localStorage.getItem('userid') == null) {
      this.api.presenttoast('Please Login First');
      this.router.navigate(['/sign-in-screen']);
    } else {
      this.getProducts();
      this.alertbox();
    }
  }

  async alertbox() {
    const fp = localStorage.getItem('fingerprint');
    console.log('sASAsaSA', fp);
    if (fp == null) {
      const alert = await this.alert.create({
        header: 'Do you want to add Finger Print/Face ID login',
        cssClass: 'fgprintcls',
        buttons: [
          {
            text: 'Yes',
            role: 'confirm',
            handler: () => {
              localStorage.setItem('fingerprint', 'true');
              this.api.fpval = 'true';
            },
          },
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              localStorage.setItem('fingerprint', 'false');
              this.api.fpval = 'false';
            },
          },
        ],
      });
      await alert.present();
    }
  }
  getProducts() {

    this.products = this.api.allProducts.myproduct

    // const myData =
    //   'myData={"verify_token":"' +
    //   localStorage.getItem('token') +
    //   '","method":"get_avilable_products"}';
    // this.api.insertData(myData).subscribe(
    //   (res: any) => {
    //     console.log(res);

    //     if (res.message == 'success') {
    //       this.api.hideLoader()
    //       this.products = res.myproduct;
    //     }
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
    this.deletedraftafter7days();
  }

  investmentsubProducts() {
    this.router.navigate(['/sub-products']);
  }


  goToAccident() {
    this.router.navigate(['/accident1']);
  }

  goToPolicy1() {
    this.router.navigate(['/policy1']);

  }

  openProduct(product, comingFrom) {
    console.log('selected product', product);
    localStorage.setItem('productName', product.name);
    localStorage.setItem('productid', product.id);
    if (product.name == 'Investment plans') {
      this.investmentsubProducts();
      // this.getPurchasedProducts(comingFrom);
    } else {
      this.subProducts(product.id, comingFrom);
    }

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

  getPurchasedProducts(comingFrom: any) {
    let data: { [key: string]: any } = {
      'verify_token': localStorage.getItem('token'),
      'method': 'getPurchasedPolicies'
    }
    this.api.showLoader();
    this.api.submitFormData(data).subscribe((res: any) => {
      this.api.hideLoader();
      console.log('purchased products: ', res);
      if (res.status_no == 1) {
        let subProducts = [];
        subProducts = res.purchasePolicies;
        localStorage.setItem('subProducts', JSON.stringify(subProducts));
        this.PopupCust(comingFrom);
      } else {

      }
    }, (error: any) => {

    });
  }

  tab1Click() {
    if (localStorage.getItem('userid')) {
      this.navCtrl.navigateRoot('explore-screen-before-login-expanded');
    } else {
      this.navCtrl.navigateRoot('explore-screen-before-login-expanded2');
    }
  }
  tab2Click() {
    this.navCtrl.navigateRoot('home-page-screen-after-login');
  }

  updateProfile() {
    this.navCtrl.navigateRoot('profile-update');
  }
  // async PopupCust() {
  //   const modal = await this.modal.create({
  //     component: QuotePopupPage,
  //     cssClass: 'QuotePopup',
  //   });
  //   modal.onDidDismiss().then((res) => {
  //     console.log('data-------', res);
  //     if(res.data.product_for_quote==1){
  //       this.router.navigate(['/mypolicies']);
  //       localStorage.setItem('subProId',res.data.id);
  //       localStorage.setItem('subProName',res.data.name);
  //     }
  //     else{
  //       this.subProducts(res.data.id);
  //     }
  //   }).catch(error=>console.log("error----",error));
  //   return await modal.present();
  // }

  PopupCust(comingFrom) {
    this.api.comingFrom = comingFrom;

    this.router.navigate(['/quote-popup']);
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

  deletedraftafter7days() {
    this.draftArr = JSON.parse(localStorage.getItem('draftArr'));
    if (this.draftArr == null) {
      this.api.hideLoader()
    } else {
      this.api.hideLoader()
      for (var i = 0; i < this.draftArr.length; i++) {
        this.calclatedtime = moment(
          this.draftArr[i].datetime,
          'YYYYMMDD'
        ).fromNow(); // 11 years ago
        console.log('tt-----', this.calclatedtime);

        if (this.calclatedtime.includes('days')) {
          console.log('day wala ha bhai');
          var day = this.calclatedtime.substring(
            0,
            this.calclatedtime.indexOf(' ')
          );
          if (parseInt(day) > 7) {
            this.draftArr.splice(i, 1);
          }
        }
      }

      localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
    }

  }
}
