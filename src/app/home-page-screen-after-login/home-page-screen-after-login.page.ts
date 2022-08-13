import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
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
  constructor(public navCtrl: NavController, public menuCtrl: MenuController,
    public router: Router,
    public modal: ModalController,
    public api: InsuranceAppService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    const myData =  'myData={"verify_token":"'+localStorage.getItem('token')+'","method":"get_avilable_products"}';
    this.api.insertData(myData).subscribe((res: any)=>{
      console.log(res);
      if(res.message=='success'){
        this.products=res.myproduct;
      }
    },(err)=>{
      console.log(err);
    });
  }
  openProduct(product){
       console.log("seleted product",product);
       localStorage.setItem('productName',product.name);
       this.subProducts(product.id);
  }
  subProducts(id){
    const myData = 'myData={"verify_token":"'+localStorage.getItem('token')+'","product_id":"'+id+'","method":"get_avilable_subproducts"}';
    this.api.insertData(myData).subscribe((res: any)=>{
      let subproducts = [];
      console.log("subProducts---------",res);
        res.subproducts.map((value,index)=>{
        if(value.name!="Local Travel Insurance" && value.name!="Pilgrimage Plans" && value.name!="Student Plan"  && value.name!="Europe / Shengen" ){
          subproducts.push(value);
        }
      });
      console.log('subproducts after check---',subproducts);
      // return;
      localStorage.setItem('subProducts',JSON.stringify(subproducts) ) ;
      this.PopupCust();

    },(err)=>{
      console.log(err);

    });
  }
  tab1Click(){
    this.navCtrl.navigateRoot('explore-screen-before-login-expanded');
  }
  tab2Click(){
    this.navCtrl.navigateRoot('home-page-screen-after-login');
  }
  tab3Click(){
    this.navCtrl.navigateRoot('contactus');
  }
  updateProfile(){
    this.navCtrl.navigateRoot('profile-update');
  }
  async PopupCust() {
    const modal = await this.modal.create({
      component: QuotePopupPage,
      cssClass: 'QuotePopup',
    });
    modal.onDidDismiss().then((res) => {
      console.log('data-------', res);
      if(res.data.product_for_quote==1){
        this.router.navigate(['/mypolicies']);
        localStorage.setItem('subProId',res.data.id);
        localStorage.setItem('subProName',res.data.name);
      }
      else{
        this.subProducts(res.data.id);
      }
    }).catch(error=>console.log("error----",error));
    return await modal.present();
  }
}
