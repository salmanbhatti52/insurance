
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

  arr1 = [];
  arr2 = [];
  arr3 = [];
  arr4 = [];
  arr5 = [];


  counter: any = 0;

  constructor(public router: Router,
    public modal: ModalController,
    public location: Location,
    public api: InsuranceAppService) { }

  ngOnInit() {
    this.subProducts = JSON.parse(localStorage.getItem('subProducts'));
    this.arr1 = this.subProducts;

    this.productID = localStorage.getItem('productid');
    console.log('productid', this.productID);
    this.insurancename = localStorage.getItem('productName');
    console.log(this.insurancename);


  }

  goback() {

    if (this.counter <= 1) {
      this.location.back();
    } else {

      if (this.counter == 2) {
        this.subProducts = this.arr1;
      }
      if (this.counter == 3) {
        this.subProducts = this.arr2;
      }
      if (this.counter == 4) {
        this.subProducts = this.arr3;
      } if (this.counter == 5) {
        this.subProducts = this.arr4;
      }
      this.counter--;
    }
    console.log('this.counter--', this.counter);

  }
  dismiss() {
    this.modal.dismiss();
  }

  subProductsshow(id) {
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","product_id":"' + id + '","method":"get_avilable_subproducts"}';
    this.api.insertData(myData).subscribe((res: any) => {
      const subproducts = [];
      console.log('subProducts---------11111', res);
      res.subproducts.map((value, index) => {
        // if (value.name != "Local Travel Insurance" && value.name != "Pilgrimage Plans" && value.name != "Student Plan" && value.name != "Europe / Shengen") {
        //   subproducts.push(value);
        // }
        subproducts.push(value);
      });
      console.log('subproducts after check---22', subproducts);
      this.counter++;
      console.log('this.counter++', this.counter);
      if (this.counter == 1) {
        this.arr1 = subproducts;
      }
      if (this.counter == 2) {
        this.arr2 = subproducts;
      }
      if (this.counter == 3) {
        this.arr3 = subproducts;
      }
      if (this.counter == 4) {
        this.arr4 = subproducts;
      } if (this.counter == 5) {
        this.arr5 = subproducts;
      }
      // return;
      this.subProducts = subproducts;
      localStorage.setItem('subProducts', JSON.stringify(subproducts));

    }, (err) => {
      console.log(err);

    });
  }
  seeDetails(sp) {
    console.log(sp);
    if (sp.name == 'Local Travel Insurance') {
      localStorage.setItem('productid2', sp.id);
      this.router.navigate(['/localsubproduct']);
    } else {
      if (sp.product_for_quote == 1) {
        if (sp.name == 'Third Party') {
          // this.router.navigate(['/gibsproducts']);
          this.router.navigate(['/mypolicies']);
        } else {
          if (sp.name == 'Student Plan' || sp.name == 'Europe / Schengen' || sp.name == 'Travel Care Premier' || sp.name == 'Travel Care Visa') {
            this.router.navigate(['/mypolicies']);
          } else {
            localStorage.setItem('localtravel', JSON.stringify(sp));
            this.router.navigate(['/internationalinformation']);
          }
        }

        // this.router.navigate(['/mypolicies']);
        localStorage.setItem('subProId', sp.id);
        localStorage.setItem('subProName', sp.name);
      }
      else {
        this.subProductsshow(sp.id);
      }
    }

    // else {
    //   if (sp.name == 'Student Plan' || sp.name == 'Europe / Shengen') {
    //     this.router.navigate(['/mypolicies']);
    //   } else {
    //     localStorage.setItem('localtravel', JSON.stringify(sp));
    //     this.router.navigate(['/travelquote']);
    //   }


    // this.modal.dismiss(sp).then(data => {
    //   console.log('data came back from modal');
    //   console.log(data);
    // })
  }

  gibsproducts(sp) {
    localStorage.setItem('subProName', sp);
    this.router.navigate(['/gibsproducts']);
  }

  handleImgError(ev: any, item: any, url) {
    const source = ev.srcElement;
    const imgSrc = `assets/images/placeholder.jpg`;
    source.src = imgSrc;
  }

}
