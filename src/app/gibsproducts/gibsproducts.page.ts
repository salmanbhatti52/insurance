import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InsuranceAppService } from '../services/insurance-app.service';

@Component({
  selector: 'app-gibsproducts',
  templateUrl: './gibsproducts.page.html',
  styleUrls: ['./gibsproducts.page.scss'],
})
export class GibsproductsPage implements OnInit {
  motorsubproducts = [];
  productType: string;
  constructor(
    public router: Router,
    public modal: ModalController,
    public location: Location,
    public api: InsuranceAppService
  ) { }

  ngOnInit() {
    // this.gibsproduct();
    this.getcarclasses()
  }

  getcarclasses() {
    const myData =
      'myData={"verify_token":"' +
      localStorage.getItem('token') +
      '","product_class":"comprehensive_motor_plans","method":"get_car_classes"}';
    this.api.insertData(myData).subscribe(
      (res: any) => {
        console.log(res);
        this.motorsubproducts = res.values
      },
      (err) => {
        console.log(err);
      }
    );
  }
  // gibsproduct() {
  //   this.api.showLoader();
  //   const myData = {
  //     sid: 'ECHANNEL2',
  //     token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
  //   };
  //   this.api.gibsapi(myData).subscribe(
  //     (res: any) => {
  //       console.log(res);
  //       const token = res.accessToken;
  //       this.motorproductonly(token);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
  // motorproductonly(token) {
  //   const Bearertoken = token;
  //   this.api
  //     .getpolicy(
  //       'http://testcipapiservices.gibsonline.com/api/metadata/products',
  //       Bearertoken
  //     )
  //     .subscribe(
  //       (res: any) => {
  //         this.api.hideLoader();
  //         console.log('ressssss', res);
  //         res.map((value, index) => {
  //           if (
  //             value.productName == 'PRIVATE MOTOR-AUTO CLASSIC' ||
  //             value.productName == 'PRIVATE MOTOR-AUTO PLUS' ||
  //             value.productName == 'UBER CLASSIC MOTOR'
  //           ) {
  //             this.motorsubproducts.push(value);
  //           }
  //         });
  //         // console.log('subproducts after check---11', this.motorsubproducts);

  //         // this.counter++;
  //         // console.log('this.counter++', this.counter);
  //       },
  //       (err) => {
  //         this.api.hideLoader();
  //       }
  //     );
  // }

  GProductdetail(p) {
    console.log(p);
    if (p == 'Auto Classic (5% Of vehicle value)') {
      this.productType = 'Auto Classic'
    } if (p == 'Auto Plus (5% Of vehicle value)') {
      this.productType = 'Auto Plus'
    }
    if (p == 'Uber Classic (5% Of vehicle value)') {
      this.productType = 'Uber Classic'
    }
    this.router.navigate(['gibsplans', {
      productType: this.productType
    }]);
  }

  // GProductdetail(ID) {
  //   const myData = {
  //     sid: 'ECHANNEL2',
  //     token: '78CD825E-2F6A-4986-962C-7F0FA3E945BD',
  //   };
  //   this.api.gibsapi(myData).subscribe(
  //     (res: any) => {
  //       // console.log(res);
  //       const token = res.accessToken;
  //       this.api
  //         .getpolicy(
  //           'http://testcipapiservices.gibsonline.com/api/metadata/products/' +
  //           ID,
  //           token
  //         )
  //         .subscribe((res: any) => {
  //           console.log('gibs product detail', res);
  //           localStorage.setItem('gibsproduct', JSON.stringify(res));

  //           this.router.navigate(['gibsplans']);
  //         });
  //     },
  //     (err) => {
  //       console.log(err);
  //       this.api.hideLoader();
  //     }
  //   );
  // }

  goback() {
    this.location.back();
  }
}
