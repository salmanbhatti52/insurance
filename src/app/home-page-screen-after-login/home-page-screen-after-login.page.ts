import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, MenuController, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { QuotePopupPage } from '../quote-popup/quote-popup.page';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';
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

  products: any;
  username: any;
  loginas: string;
  result: string;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController,
    public router: Router,
    public modal: ModalController,
    public api: InsuranceAppService,
    public alert: AlertController,
    public actionSheetCtrl:ActionSheetController) { }

  ngOnInit() {

  }
  ionViewWillEnter() {

    this.loginas = localStorage.getItem('loginas')
    this.username = localStorage.getItem('fname');
    this.api.username = this.username

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
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","method":"get_avilable_products"}';
    this.api.insertData(myData).subscribe((res: any) => {
      console.log(res);
      if (res.message == 'success') {
        this.products = res.myproduct;
      }
    }, (err) => {
      console.log(err);
    });
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
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","product_id":"' + id + '","method":"get_avilable_subproducts"}';
    this.api.insertData(myData).subscribe((res: any) => {
      const subproducts = [];
      console.log('subProducts---------', res);
      res.subproducts.map((value, index) => {
        //old code..
        // if (value.name != "Local Travel Insurance" && value.name != "Pilgrimage Plans" && value.name != "Student Plan" && value.name != "Europe / Shengen" && value.name != 'Enhanced Comprehensive' && value.name != 'Auto Variants') {
        //   subproducts.push(value);
        // }
        //new code to add local travel insurance
        if (value.name != 'Pilgrimage Plans' && value.name != 'Student Plan' && value.name != 'Europe / Shengen' && value.name != 'Enhanced Comprehensive' && value.name != 'Auto Variants') {
          subproducts.push(value);
        }
      });
      console.log('subproducts after check---', subproducts);
      // return;
      localStorage.setItem('subProducts', JSON.stringify(subproducts));
      this.PopupCust(comingFrom);

    }, (err) => {
      console.log(err);

    });
  }
  tab1Click() {

    if(localStorage.getItem('userid')){
       this.navCtrl.navigateRoot('explore-screen-before-login-expanded');
    }else{
      this.navCtrl.navigateRoot('explore-screen-before-login-expanded2');
    }


  }
  tab2Click() {
    this.navCtrl.navigateRoot('home-page-screen-after-login');
  }
  tab3Click() {
    this.navCtrl.navigateRoot('contactus');
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




  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({

      buttons: [
        {
          text: 'Chat with an agent',
          data: {
            action: 'caht',
          },
        },
        {
          text: 'Make Enquiry',
          data: {
            action: 'enquiry',
          },
        },
        {
          text: 'Our Locations',
          data: {
            action: 'location',
          },
        }
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);

    console.log('res----',result);

    if(result.data.action == 'location'){
      this.navCtrl.navigateRoot('contactus');
    }


  }

}
