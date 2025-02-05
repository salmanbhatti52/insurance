"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home-page-screen-after-login_home-page-screen-after-login_module_ts"],{

/***/ 29637:
/*!*********************************************************************************************!*\
  !*** ./src/app/home-page-screen-after-login/home-page-screen-after-login-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageScreenAfterLoginPageRoutingModule": () => (/* binding */ HomePageScreenAfterLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_page_screen_after_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page-screen-after-login.page */ 73279);




const routes = [
    {
        path: '',
        component: _home_page_screen_after_login_page__WEBPACK_IMPORTED_MODULE_0__.HomePageScreenAfterLoginPage
    }
];
let HomePageScreenAfterLoginPageRoutingModule = class HomePageScreenAfterLoginPageRoutingModule {
};
HomePageScreenAfterLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageScreenAfterLoginPageRoutingModule);



/***/ }),

/***/ 91669:
/*!*************************************************************************************!*\
  !*** ./src/app/home-page-screen-after-login/home-page-screen-after-login.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageScreenAfterLoginPageModule": () => (/* binding */ HomePageScreenAfterLoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_page_screen_after_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page-screen-after-login-routing.module */ 29637);
/* harmony import */ var _home_page_screen_after_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-screen-after-login.page */ 73279);







let HomePageScreenAfterLoginPageModule = class HomePageScreenAfterLoginPageModule {
};
HomePageScreenAfterLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_page_screen_after_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageScreenAfterLoginPageRoutingModule
        ],
        declarations: [_home_page_screen_after_login_page__WEBPACK_IMPORTED_MODULE_1__.HomePageScreenAfterLoginPage]
    })
], HomePageScreenAfterLoginPageModule);



/***/ }),

/***/ 73279:
/*!***********************************************************************************!*\
  !*** ./src/app/home-page-screen-after-login/home-page-screen-after-login.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageScreenAfterLoginPage": () => (/* binding */ HomePageScreenAfterLoginPage)
/* harmony export */ });
/* harmony import */ var _Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_screen_after_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-screen-after-login.page.html?ngResource */ 19991);
/* harmony import */ var _home_page_screen_after_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page-screen-after-login.page.scss?ngResource */ 29784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/insurance-app.service */ 22111);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 67122);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);











let HomePageScreenAfterLoginPage = class HomePageScreenAfterLoginPage {
  constructor(navCtrl, menuCtrl, router, modal, api, alert, actionSheetCtrl, platform, iab) {
    this.navCtrl = navCtrl;
    this.menuCtrl = menuCtrl;
    this.router = router;
    this.modal = modal;
    this.api = api;
    this.alert = alert;
    this.actionSheetCtrl = actionSheetCtrl;
    this.platform = platform;
    this.iab = iab;
    this.slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    this.draftArr = '';
    this.calclatedtime = '';
  }

  ngOnInit() {}

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

  alertbox() {
    var _this = this;

    return (0,_Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fp = localStorage.getItem('fingerprint');
      console.log('sASAsaSA', fp);

      if (fp == null) {
        const alert = yield _this.alert.create({
          header: 'Do you want to add Finger Print/Face ID login',
          cssClass: 'fgprintcls',
          buttons: [{
            text: 'Yes',
            role: 'confirm',
            handler: () => {
              localStorage.setItem('fingerprint', 'true');
              _this.api.fpval = 'true';
            }
          }, {
            text: 'No',
            role: 'cancel',
            handler: () => {
              localStorage.setItem('fingerprint', 'false');
              _this.api.fpval = 'false';
            }
          }]
        });
        yield alert.present();
      }
    })();
  }

  getProducts() {
    this.products = this.api.allProducts.myproduct; // const myData =
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

  goToPolicy1() {
    this.router.navigate(['/policy1']);
  }

  openProduct(product, comingFrom) {
    console.log('selected product', product);
    localStorage.setItem('productName', product.name);
    localStorage.setItem('productid', product.id);

    if (product.name == 'Investment plans') {
      this.investmentsubProducts(); // this.getPurchasedProducts(comingFrom);
    } else {
      this.subProducts(product.id, comingFrom);
    }
  }

  subProducts(id, comingFrom) {
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","product_id":"' + id + '","method":"get_avilable_subproducts"}';
    this.api.insertData(myData).subscribe(res => {
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
      console.log('subproducts after check---', subproducts); // return;

      localStorage.setItem('subProducts', JSON.stringify(subproducts));
      this.PopupCust(comingFrom);
    }, err => {
      console.log(err);
    });
  }

  getPurchasedProducts(comingFrom) {
    let data = {
      'verify_token': localStorage.getItem('token'),
      'method': 'getPurchasedPolicies'
    };
    this.api.showLoader();
    this.api.submitFormData(data).subscribe(res => {
      this.api.hideLoader();
      console.log('purchased products: ', res);

      if (res.status_no == 1) {
        let subProducts = [];
        subProducts = res.purchasePolicies;
        localStorage.setItem('subProducts', JSON.stringify(subProducts));
        this.PopupCust(comingFrom);
      } else {}
    }, error => {});
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
  } // async PopupCust() {
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

  tab3Click() {
    var _this2 = this;

    return (0,_Users_muhammadali_Documents_Ali_my_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.platform.is('android')) {
        _this2.router.navigate(['/contactus']);
      } else {
        const actionSheet = yield _this2.actionSheetCtrl.create({
          buttons: [{
            text: 'Chat with an agent',
            data: {
              action: 'chat'
            }
          }, {
            text: 'Make Enquiry',
            data: {
              action: 'chat'
            }
          }, {
            text: 'Our Locations',
            data: {
              action: 'location'
            }
          }]
        });
        yield actionSheet.present();
        const result = yield actionSheet.onDidDismiss();
        _this2.result = JSON.stringify(result, null, 2);
        console.log('res----', result);

        if (result.data.action == 'location') {
          _this2.navCtrl.navigateRoot('contactus');
        }

        if (result.data.action == 'chat') {
          const browser = _this2.iab.create('https://webchat.ebanqo.io/cornerstone', '_blank');
        }
      }
    })();
  }

  handleImgError(ev, item, url) {
    const source = ev.srcElement;
    const imgSrc = `assets/images/travel.svg`;
    source.src = imgSrc;
  }

  handleImgError2(ev, item, url) {
    const source = ev.srcElement;
    const imgSrc = `assets/images/car.svg`;
    source.src = imgSrc;
  }

  deletedraftafter7days() {
    this.draftArr = JSON.parse(localStorage.getItem('draftArr'));

    if (this.draftArr == null) {
      this.api.hideLoader();
    } else {
      this.api.hideLoader();

      for (var i = 0; i < this.draftArr.length; i++) {
        this.calclatedtime = moment__WEBPACK_IMPORTED_MODULE_5__(this.draftArr[i].datetime, 'YYYYMMDD').fromNow(); // 11 years ago

        console.log('tt-----', this.calclatedtime);

        if (this.calclatedtime.includes('days')) {
          console.log('day wala ha bhai');
          var day = this.calclatedtime.substring(0, this.calclatedtime.indexOf(' '));

          if (parseInt(day) > 7) {
            this.draftArr.splice(i, 1);
          }
        }
      }

      localStorage.setItem('draftArr', JSON.stringify(this.draftArr));
    }
  }

};

HomePageScreenAfterLoginPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
}, {
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser
}];

HomePageScreenAfterLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-home-page-screen-after-login',
  template: _home_page_screen_after_login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_screen_after_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePageScreenAfterLoginPage);


/***/ }),

/***/ 29784:
/*!************************************************************************************************!*\
  !*** ./src/app/home-page-screen-after-login/home-page-screen-after-login.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = ".top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 15% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 25px;\n  width: 25px;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background: white !important;\n  --scroll-bar-background-active: white !important;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 0px 7px 19px 7px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.9px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n}\n\n.gimg-div {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n}\n\n.cimg {\n  width: 100px;\n  height: 50px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 47.2%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.4%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 5%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 640px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n.md ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\n.md ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px 45px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 65px;\n  height: 62px;\n}\n\n.ios ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios .container {\n  width: 85%;\n  margin: 29% 17% 24% 8%;\n}\n\n.md .topmargin {\n  display: flex;\n  align-items: center;\n  padding-top: 5%;\n}\n\n.ios .topmargin {\n  display: flex;\n  align-items: center;\n  padding-top: 12%;\n}\n\n.middle-mg {\n  margin: 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zY3JlZW4tYWZ0ZXItbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSEo7O0FBV0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQVJKOztBQVlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7QUFWSjs7QUFhQTtFQUVJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBWEo7O0FBY0E7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBWko7O0FBZUE7RUFDSSx5Q0FBQTtFQUNBLGdEQUFBO0FBWko7O0FBdUJBO0VBS0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXhCSjs7QUEyQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXhCSjs7QUEyQkE7RUFDSSxrQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNB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O0FBcURRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBbkRaOztBQXFEUTtFQUNJLG1CQUFBO0FBbkRaOztBQW9EWTtFQUNJLGNBQUE7QUFsRGhCOztBQXFEUTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7QUFuRFo7O0FBcURRO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtBQW5EWjs7QUF3REE7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7QUFyREo7O0FBd0RBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQXJESjs7QUF3REE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXJESjs7QUF3REE7RUFDSSxnQkFBQTtBQXJESiIsImZpbGUiOiJob21lLXBhZ2Utc2NyZWVuLWFmdGVyLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1oZWFkZXJ7XG4vLyAgICAgd2lkdGg6IDg1JTtcbi8vICAgICBtYXJnaW46MHB4IGF1dG87XG4vLyB9XG4udG9wLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDAlIGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbn1cblxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDM2LjA2cHg7XG4gICAgaGVpZ2h0OiAzNi4wNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI0E4QjQwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgcGFkZGluZzogMS41cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vLyBpbWcuY2FtLWljb24ge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDc4cHg7XG4vLyAgICAgcmlnaHQ6IDVweDtcbi8vIH1cbi5wcm8taW1nIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udGl0bGUtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XG59XG5cbnAubmFtZS1wYXJhIHtcbiAgICAvLyB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjQThCNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5wLndjLXBhcmEge1xuICAgIC8vIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbmlvbi1zbGlkZXMge1xuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm1pZC1kaXYge1xuICAgIC8vIGhlaWdodDogMTcwcHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTJweCA1NnB4IDEycHggMTJweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNjkgMTg3IDcwIC8gMTUlKTtcbiAgICAvLyBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4ubWlkLXN1Yi1kaXYge1xuICAgIC8vIGRpc3BsYXk6ZmxleDtcbiAgICAvLyBwYWRkaW5nOiAyMnB4IDE1LjVweCAxM3B4IDE0cHg7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwcHggN3B4IDE5cHggN3B4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5wLnAxIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzFBMjA2RDtcbn1cblxucC5wMiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNBOEI0MDA7XG59XG5cbi5wLWJhciB7XG4gICAgbWFyZ2luLXRvcDogMTUuNXB4O1xufVxuXG5wLnAzIHtcbiAgICBtYXJnaW46IDE1LjVweCAwcHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNUQ1RDVEO1xufVxuXG5pb24tYnV0dG9uLmJ0bi1zbSB7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHdpZHRoOiA3MXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxucC5taWQtcDEge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMUEyMDZEO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDAuOXB4O1xufVxuXG5wLm1pZC1wMiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNBOEI0MDA7XG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5hcnJvdyB7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgd2lkdGg6IDlweDtcbn1cblxuLmdjLWRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIGhlaWdodDogMTAzcHg7XG59XG5cbi5naW1nLWRpdiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvLyBoZWlnaHQ6IDg1cHg7XG4gICAgLy8gcGFkZGluZzogMzFweCAxN3B4IDMwcHggMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTc2IDE4MSAwIC8gMTAlKTtcbn1cblxuLmNpbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbnAuZ3AtZGl2IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzVENUQ1RDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5sc3QtZGl2IHtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gbWFyZ2luOiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDoxMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc2LDE4MSwwLDMyJSk7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNjkgMTg3IDcwIC8gMTUlKTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG5wLmxzdC1wYXJhIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzVENUQ1RDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxOHB4IDE0cHg7XG59XG5cbi5saW1nLWRpdiB7XG4gICAgLy8gd2lkdGg6IDY5JTtcbiAgICAvLyB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgLy8gcGFkZGluZzogNnB4IDE3cHggMHB4O1xufVxuXG4uaW1nIHtcbiAgICB3aWR0aDogMjEuNXB4O1xuICAgIGhlaWdodDogMjEuNXB4O1xuICAgIG9wYWNpdHk6IDYwJTtcbn1cblxuLmFjdGl2ZWltZyB7XG4gICAgd2lkdGg6IDIxLjVweDtcbiAgICBoZWlnaHQ6IDIxLjVweDtcbn1cblxuLmZvbnQge1xuICAgIHBhZGRpbmctdG9wOiA0JTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBvcGFjaXR5OiA2MCU7XG59XG5cbi5mb250YWN0aXZlIHtcbiAgICBwYWRkaW5nLXRvcDogNCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5jaW1nIHtcbiAgICBvcGFjaXR5OiA2MCV5O1xufVxuXG5ociB7XG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NXB4O1xuICAgIHJpZ2h0OiA0Ny4yJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTJweCkgYW5kIChtaW4taGVpZ2h0OjkxNHB4KSB7XG4gICAgaHIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1NXB4O1xuICAgICAgICByaWdodDogNDcuMiU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MTRweCkgYW5kIChtaW4taGVpZ2h0OjczNnB4KSB7XG4gICAgaHIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1NXB4O1xuICAgICAgICByaWdodDogNDcuNCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIG1hcmdpbjogMjUlIGF1dG8gNSU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo4MTJweCkge1xuICAgIGhyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTVweDtcbiAgICAgICAgcmlnaHQ6IDQ3LjIlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo2NjdweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICBtYXJnaW46IDI1JSBhdXRvIDEyJTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0Ojc0MHB4KSB7XG4gICAgaHIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1NXB4O1xuICAgICAgICByaWdodDogNDcuMiU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0OjY0MHB4KSB7XG4gICAgaHIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1NXB4O1xuICAgICAgICByaWdodDogNDcuMiU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIG1hcmdpbjogMjUlIGF1dG8gMTIlO1xuICAgIH1cbn1cblxuLy8vYm90dG9tIGJhciBjc3MvLy8vXG4ubWQgaW9uLXRhYnMge1xuICAgIGlvbi10YWItYmFyIHtcbiAgICAgICAgLS1ib3JkZXI6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggMHB4IDE2cHggMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDYycHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAgIGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgIGlvbi10YWItYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MjQ3NEY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRhYi1idXR0b24uY29tbWVudHMge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGFiLWJ1dHRvbi5ub3RpZnMge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xuLmlvcyBpb24tdGFicyB7XG4gICAgaW9uLXRhYi1iYXIge1xuICAgICAgICAtLWJvcmRlcjogMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDBweCAxNnB4IDBweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggNDVweCAwcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA2NXB4O1xuICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICBoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDI0NzRGO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi10YWItYnV0dG9uLmNvbW1lbnRzIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRhYi1idXR0b24ubm90aWZzIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW9zIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAyOSUgMTclIDI0JSA4JTtcbn1cblxuLm1kIC50b3BtYXJnaW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5pb3MgLnRvcG1hcmdpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMiU7XG59XG5cbi5taWRkbGUtbWcge1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG59Il19 */";

/***/ }),

/***/ 19991:
/*!************************************************************************************************!*\
  !*** ./src/app/home-page-screen-after-login/home-page-screen-after-login.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobalafterlogin\">\n    <ion-row style=\"display: flex; align-items: center; padding-top: 5%\">\n      <ion-col size=\"8\" style=\"padding-left: 27px\">\n        <ion-menu-toggle>\n          <ion-buttons>\n            <div style=\"width: 100%\">\n              <img src=\"assets/images/menuicon.svg\" alt=\"sb-btn\" />\n            </div>\n          </ion-buttons>\n        </ion-menu-toggle>\n      </ion-col>\n      <ion-col size=\"2\"></ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n        <img\n          *ngIf=\"loginas == 'user'\"\n          (click)=\"updateProfile()\"\n          class=\"pro-img\"\n          src=\"assets/images/user.png\"\n          alt=\"profile\"\n        />\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n    <div style=\"background: #1a206d; height: 250px\">\n        <ion-row class=\"topmargin\">\n            <ion-col size=\"2\" style=\"padding-left: 27px\">\n                <ion-menu-toggle>\n                    <ion-buttons>\n                        <div style=\"width: 100%\">\n                            <img src=\"assets/images/menuicon.svg\" alt=\"sb-btn\" />\n                        </div>\n                    </ion-buttons>\n                </ion-menu-toggle>\n            </ion-col>\n            <ion-col size=\"8\" style=\"text-align: center;\">\n                <!-- <img src=\"assets/images/cornerlogo.png\" style=\"width: 100px;\"> -->\n            </ion-col>\n            <ion-col class=\"titleclass\" size=\"2\">\n                <img *ngIf=\"loginas == 'user'\" (click)=\"updateProfile()\" class=\"pro-img\" src=\"assets/images/user.png\" alt=\"profile\" />\n            </ion-col>\n        </ion-row>\n        <div class=\"top-container\">\n            <p class=\"name-para\">Hi {{username}},</p>\n            <p class=\"wc-para\">Welcome</p>\n\n            <div class=\"slide-div\">\n                <ion-slides pager=\"true\" [options]=\"slideOpts\" scrollbar=\"true\" (ionSlideDidChange)=\"active-slide\" class=\"slides1\">\n                    <ion-slide>\n                        <div class=\"mid-div\" style=\"width: 99%\">\n                            <div class=\"mid-sub-div\">\n                                <!-- <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar\n                    class=\"p-bar\"\n                    value=\"0.38\"\n                    style=\"--progress-background: #1a206d\"\n                  >\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\" (click)=\"learnmore()\"\n                    >Learn more</ion-button\n                  >\n                </div> -->\n\n                                <div style=\"width: 100%\" (click)=\"learnmore()\">\n                                    <img style=\"border-radius: 10px 50px 10px 10px\" class=\"ins-nce\" src=\"assets/images/slider/pt1.jpg\" />\n                                </div>\n                            </div>\n                        </div>\n                    </ion-slide>\n\n                    <!-- <ion-slide>\n            <div class=\"mid-div\" style=\"width: 99%\">\n              <div class=\"mid-sub-div\">\n\n                <div style=\"width: 100%\" (click)=\"learnmore2()\">\n                  <img\n                    style=\"border-radius: 10px 50px 10px 10px\"\n                    class=\"ins-nce\"\n                    src=\"assets/images/slider/pt3.png\"\n                  />\n                </div>\n              </div>\n            </div>\n          </ion-slide> -->\n\n                    <ion-slide>\n                        <div class=\"mid-div\" style=\"width: 99%\">\n                            <div class=\"mid-sub-div\">\n                                <!-- <div>\n                  <p class=\"p1\">Get Immediate</p>\n                  <p class=\"p2\">Claim assistance</p>\n                  <ion-progress-bar\n                    class=\"p-bar\"\n                    value=\"0.38\"\n                    style=\"--progress-background: #1a206d\"\n                  >\n                  </ion-progress-bar>\n                  <p class=\"p3\">We have got you covered</p>\n                  <ion-button class=\"btn-sm\" (click)=\"learnmore3()\"\n                    >Learn more</ion-button\n                  >\n                </div> -->\n                                <div style=\"width: 100%\" (click)=\"learnmore3()\">\n                                    <img style=\"border-radius: 10px 50px 10px 10px\" class=\"ins-nce\" src=\"assets/images/slider/pt2.jpg\" />\n                                </div>\n                            </div>\n                        </div>\n                    </ion-slide>\n                </ion-slides>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div style=\"display: flex; align-items: center\">\n            <p class=\"mid-p1\">PRODUCTS</p>\n            <!-- <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p> -->\n        </div>\n\n        <ion-grid style=\"padding: 0px; width: 100%\">\n            <ion-row style=\"margin: 16px 0px\">\n                <!-- padding:6px 6px 6px 0px;  -->\n                <ion-col style=\"width: 100%; display: flex;\">\n                    <div class=\"gc-div\" *ngFor=\"let p of products; let i = index\" (click)=\"openProduct(p,p.name)\">\n                        <!-- (click)=\"openQuote(p)\" -->\n                        <div *ngIf=\"p.name !='Investment plans'\" [class.middle-mg]='i%2==0'>\n                            <div class=\"gimg-div\">\n                                <img *ngIf=\"p.name =='Travel Insurance'\" (error)=\"handleImgError($event, userIMG)\" src=\"assets/images/travel.svg\" alt=\"\" class=\"cimg\" />\n\n                                <img *ngIf=\"p.name =='Motor Insurance'\" (error)=\"handleImgError2($event, userIMG)\" src=\"assets/images/car.svg\" alt=\"\" class=\"cimg\" />\n\n                                <!-- <img *ngIf=\"p.name =='Investment plans'\" (error)=\"handleImgError2($event, userIMG)\" src=\"assets/images/investmentplan2.png\" alt=\"\" class=\"cimg\" /> -->\n                            </div>\n                            <p class=\"gp-div\">{{p.name}}</p>\n                        </div>\n                    </div>\n                    <div style=\"margin-left: 10px;\" class=\"gc-div\" (click)=\"goToPolicy1()\">\n                        <div class=\"gimg-div\">\n                            <img src=\"assets/images/investmentplan2.png\" alt=\"\" class=\"cimg\" />\n                        </div>\n                        <p class=\"gp-div\">Investment Plans</p>\n                    </div>\n                </ion-col>\n                <!-- <ion-col siz=\"4\">\n                    <div class=\"gc-div\" (click)=\"goToPolicy1()\">\n                        <div class=\"gimg-div\">\n                            <img src=\"assets/images/policy_plan.svg\" alt=\"\" class=\"cimg\" />\n                        </div>\n                        <p class=\"gp-div\">Policy Plans</p>\n                    </div>\n                </ion-col> -->\n                <!-- (click)=\"openQuote(p)\" -->\n\n            </ion-row>\n        </ion-grid>\n\n\n        <!-- <ion-grid style=\"padding: 0px; width: 100%\">\n            <ion-row style=\"margin: 16px 0px\">\n\n                <ion-col size=\"4\">\n                    <div class=\"gc-div\" (click)=\"goToPolicy1()\">\n                        <div class=\"gimg-div\">\n                            <img src=\"assets/images/policy_plan.svg\" alt=\"\" class=\"cimg\" />\n                        </div>\n                        <p class=\"gp-div\">Policy Plans</p>\n                    </div>\n                </ion-col>\n\n            </ion-row>\n        </ion-grid> -->\n\n        <div style=\"text-align: center; color: #1a206d; font-size: 20px\">\n            Insurance Tips\n        </div>\n        <ion-slides pager=\"true\" [options]=\"slideOpts\" scrollbar=\"true\" (ionSlideDidChange)=\"active-slide\" class=\"slides2\">\n            <ion-slide style=\"margin: 10px\">\n                <div class=\"lst-div\">\n                    <!-- <p class=\"lst-para\">\n            Are you aware you can lodge your claim online, renew your policy and\n            do more from any of our digital channels without visiting any of our\n            branches?\n          </p> -->\n                    <div class=\"limg-div\">\n                        <img style=\"border-radius: 10px\" src=\"assets/images/slider/it1.jpg\" alt=\"\" />\n                    </div>\n                </div>\n            </ion-slide>\n            <ion-slide style=\"margin: 10px\">\n                <div class=\"lst-div\">\n                    <!-- <p class=\"lst-para\">\n            Things just got better with Cornerstone! Investment products are now\n            available on our new mobile app.\n          </p> -->\n                    <div class=\"limg-div\">\n                        <img style=\"border-radius: 10px\" src=\"assets/images/slider/it2.jpg\" alt=\"\" />\n                    </div>\n                </div>\n            </ion-slide>\n            <ion-slide style=\"margin: 10px\">\n                <div class=\"lst-div\">\n                    <!-- <p class=\"lst-para\">\n            Do you know you can verify your policy using our mobile app? Here is\n            how, click on the VERIFY POLICY menu and select if your product is\n            general or life. Then you provide your policy number, its that\n            simple!\n          </p> -->\n                    <div class=\"limg-div\">\n                        <img style=\"border-radius: 10px\" src=\"assets/images/slider/it3.jpg\" alt=\"\" />\n                    </div>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <ion-tabs style=\"top: 10px !important\">\n        <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n            <hr />\n            <ion-tab-button (click)=\"tab1Click()\">\n                <img src=\"assets/images/discover.svg\" class=\"img\" />\n                <ion-label class=\"font\">Discover</ion-label>\n            </ion-tab-button>\n\n            <ion-tab-button (click)=\"tab2Click()\">\n                <img src=\"assets/images/home.svg\" class=\"activeimg\" />\n                <ion-label class=\"fontactive\">Home</ion-label>\n            </ion-tab-button>\n\n            <ion-tab-button (click)=\"tab3Click()\">\n                <img src=\"assets/images/contactus.svg\" class=\"img\" />\n                <ion-label class=\"font\">Contact Us</ion-label>\n            </ion-tab-button>\n        </ion-tab-bar>\n    </ion-tabs>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_home-page-screen-after-login_home-page-screen-after-login_module_ts.js.map