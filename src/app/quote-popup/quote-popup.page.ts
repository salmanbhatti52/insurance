import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';
@Component({
  selector: 'app-quote-popup',
  templateUrl: './quote-popup.page.html',
  styleUrls: ['./quote-popup.page.scss'],
})
export class QuotePopupPage implements OnInit {
  imgPath: any;
  Insurace_name: any;
  prod_id: any;
  subProducts: any;
  productID: any;
  insurancename: any;
  motorsubproducts = [];
  constructor(public router: Router,
    public modal: ModalController,
    public location: Location,
    public api: InsuranceAppService) { }

  ngOnInit() {
    this.subProducts = JSON.parse(localStorage.getItem('subProducts'));

    this.productID = localStorage.getItem('productid');
    console.log('productid', this.productID);
    this.insurancename = localStorage.getItem('productName');
    this.gibsproduct();
  }
  gibsproduct() {
    const myData = {
      sid: 'ECHANNEL2',
      token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD'
    };
    this.api.gibsapi(myData).subscribe((res: any) => {
      console.log(res);
      const token = res.accessToken;
      this.motorproductonly(token);
    }, (err) => {
      console.log(err);
      this.api.hideLoader();
    });
  }
  motorproductonly(token) {
    const Bearertoken = token;
    this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/Products', Bearertoken).subscribe((res: any) => {

      console.log('ressssss', res);
      res.map((value, index) => {
        if (value.productName == 'PRIVATE MOTOR-AUTO CLASSIC' || value.productName == 'PRIVATE MOTOR-AUTO PLUS' || value.productName == 'UBER CLASSIC MOTOR') {
          this.motorsubproducts.push(value);
        }
      });
      console.log('subproducts after check---', this.motorsubproducts);
    });
  }
  GProductdetail(ID) {
    const myData = {
      sid: 'ECHANNEL2',
      token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD'
    };
    this.api.gibsapi(myData).subscribe((res: any) => {
      // console.log(res);
      const token = res.accessToken;
      this.api.getpolicy('http://testcipapiservices.gibsonline.com/api/Products/' + ID, token).subscribe((res: any) => {

        console.log('gibs product detail', res);
      });
    }, (err) => {
      console.log(err);
      this.api.hideLoader();
    });

  }
  goback() {
    this.location.back();
  }
  dismiss() {
    this.modal.dismiss();
  }

  subProductsshow(id) {
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","product_id":"' + id + '","method":"get_avilable_subproducts"}';
    this.api.insertData(myData).subscribe((res: any) => {
      const subproducts = [];
      console.log('subProducts---------', res);
      res.subproducts.map((value, index) => {
        // if (value.name != "Local Travel Insurance" && value.name != "Pilgrimage Plans" && value.name != "Student Plan" && value.name != "Europe / Shengen") {
        //   subproducts.push(value);
        // }
        subproducts.push(value);
      });
      console.log('subproducts after check---', subproducts);
      // return;
      this.subProducts = subproducts;
      localStorage.setItem('subProducts', JSON.stringify(subproducts));

    }, (err) => {
      console.log(err);

    });
  }
  seeDetails(sp) {
    console.log(sp);
    if (sp == 'null') {
      this.api.presenttoast('Product details not defined');
    } else {
      if (sp.product_for_quote == 1) {
        this.router.navigate(['/mypolicies']);
        localStorage.setItem('subProId', sp.id);
        localStorage.setItem('subProName', sp.name);
      }
      else {
        this.subProductsshow(sp.id);
      }
    }


    // this.modal.dismiss(sp).then(data => {
    //   console.log('data came back from modal');
    //   console.log(data);
    // })
  }


  handleImgError(ev: any, item: any, url) {
    const source = ev.srcElement;

    const imgSrc = `assets/images/placeholder.jpg`;

    source.src = imgSrc;
  }

}
