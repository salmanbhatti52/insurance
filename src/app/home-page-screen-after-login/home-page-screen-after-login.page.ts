import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { QuotePopupPage } from '../quote-popup/quote-popup.page';
import { Router } from '@angular/router';
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
  products=[
    {id:2,name:'Motor Insurance',img:'assets/images/car.svg'},
    {id:2,name:'Travel Insurance',img:'assets/images/plane.svg'},
    {id:2,name:'Home Insurance',img:'assets/images/safe-hand.svg'},
    {id:2,name:'School Fees Guarantee',img:'assets/images/mortarboard.svg'},
    {id:2,name:'Verify Policy',img:'assets/images/sec-doc.svg'},
    {id:2,name:'Get in Touch',img:'assets/images/helping-staff.svg'}
  ]
  constructor(public navCtrl:NavController, public menuCtrl:MenuController,
    public router: Router,
    public modal: ModalController) { }

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
  openQuote(p){
    console.log(p);
    localStorage.setItem('product-details',JSON.stringify(p)) ;
    this.PopupCust();
  }
  async PopupCust() {
    const modal = await this.modal.create({
      component: QuotePopupPage,
      cssClass: 'QuotePopup',
      // componentProps:{
      //   prod_id:localStorage.getItem('prod_id')
      // }
    });
    modal.onDidDismiss().then((data) => {
      console.log('data', data);
      if (data.data == 'navigate'){
        this.router.navigate(['/quote1']);
      }
    });
    return await modal.present();
  }
}
