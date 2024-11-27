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
/* harmony import */ var D_Github_Projects_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
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

    return (0,D_Github_Projects_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    const myData = 'myData={"verify_token":"' + localStorage.getItem('token') + '","method":"get_avilable_products"}';
    this.api.insertData(myData).subscribe(res => {
      console.log(res);

      if (res.message == 'success') {
        this.api.hideLoader();
        this.products = res.myproduct;
      }
    }, err => {
      console.log(err);
    });
    this.deletedraftafter7days();
  }

  investmentsubProducts() {
    this.router.navigate(['/sub-products']);
  }

  openProduct(product, comingFrom) {
    console.log('selected product', product);
    localStorage.setItem('productName', product.name);
    localStorage.setItem('productid', product.id);

    if (product.name == 'Investment plans') {
      this.getPurchasedProducts(comingFrom);
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

    return (0,D_Github_Projects_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

module.exports = ".top-container {\n  width: 85%;\n  margin: 0% auto;\n}\n\n.container {\n  width: 85%;\n  margin: 15% auto;\n}\n\n.circle {\n  width: 36.06px;\n  height: 36.06px;\n  text-align: center;\n  border-style: solid;\n  border-color: #A8B400;\n  border-radius: 50%;\n  border-width: 1px;\n  padding: 1.5px;\n  position: relative;\n}\n\n.pro-img {\n  height: 25px;\n  width: 25px;\n}\n\n.title-div {\n  display: flex;\n  align-items: center;\n  margin: 20px auto 0px;\n}\n\np.name-para {\n  margin: 0px auto 0px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #A8B400;\n  text-transform: capitalize;\n}\n\np.wc-para {\n  margin: 0px auto;\n  font-size: 32px;\n  font-weight: 500;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  line-height: 1.6;\n}\n\nion-slides {\n  --scroll-bar-background:white !important;\n  --scroll-bar-background-active:white !important;\n}\n\n.mid-sub-div {\n  display: flex;\n  padding: 0px 7px 19px 7px;\n  justify-content: space-between;\n  text-align: left;\n}\n\np.p1 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #1A206D;\n}\n\np.p2 {\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.p-bar {\n  margin-top: 15.5px;\n}\n\np.p3 {\n  margin: 15.5px 0px 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n}\n\nion-button.btn-sm {\n  height: 22px;\n  width: 71px;\n  font-size: 10px;\n  font-weight: 400;\n  color: white;\n  text-transform: capitalize;\n  --background: #1A206D;\n  --border-radius: 5px;\n  margin-top: 15px;\n}\n\np.mid-p1 {\n  margin: 0px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #1A206D;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 0.9px;\n}\n\np.mid-p2 {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #A8B400;\n  /* text-transform: uppercase; */\n  width: 100%;\n  text-align: end;\n}\n\n.arrow {\n  height: 8px;\n  width: 9px;\n}\n\n.gc-div {\n  text-align: center;\n}\n\n.gimg-div {\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0px 0px 20px rgba(176, 181, 0, 0.1);\n}\n\n.cimg {\n  width: 100px;\n  height: 50px;\n}\n\np.gp-div {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #5D5D5D;\n  margin-top: 6px;\n}\n\np.lst-para {\n  margin: 0px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #5D5D5D;\n  width: 100%;\n  padding: 18px 14px;\n}\n\n.img {\n  width: 21.5px;\n  height: 21.5px;\n  opacity: 60%;\n}\n\n.activeimg {\n  width: 21.5px;\n  height: 21.5px;\n}\n\n.font {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n  opacity: 60%;\n}\n\n.fontactive {\n  padding-top: 4%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n.cimg {\n  opacity: 60% y;\n}\n\nhr {\n  background: #A8B400;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: 55px;\n  right: 47.2%;\n  border-radius: 6px;\n}\n\n@media only screen and (max-width: 412px) and (min-height: 914px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 414px) and (min-height: 736px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.4%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 5%;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 812px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 375px) and (min-height: 667px) {\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 740px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n}\n\n@media only screen and (max-width: 360px) and (min-height: 640px) {\n  hr {\n    background: #A8B400;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: 55px;\n    right: 47.2%;\n    border-radius: 6px;\n  }\n\n  .container {\n    width: 85%;\n    margin: 25% auto 12%;\n  }\n}\n\n.md ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 62px;\n  height: 60px;\n}\n\n.md ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.md ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar {\n  --border: 0;\n  --background: #1A206D;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;\n  padding: 10px 0px 45px 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  max-height: 65px;\n  height: 62px;\n}\n\n.ios ion-tabs ion-tab-bar:after {\n  content: \" \";\n  width: 100%;\n  bottom: 0;\n  background: var(--ion-color-light);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button {\n  background: #1A206D;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: #42474F;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.comments {\n  margin-right: 0px;\n  border-top-right-radius: 18px;\n}\n\n.ios ion-tabs ion-tab-bar ion-tab-button.notifs {\n  margin-left: 0px;\n  border-top-left-radius: 18px;\n}\n\n.ios .container {\n  width: 85%;\n  margin: 29% 17% 24% 8%;\n}\n\n.md .topmargin {\n  display: flex;\n  align-items: center;\n  padding-top: 5%;\n}\n\n.ios .topmargin {\n  display: flex;\n  align-items: center;\n  padding-top: 12%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zY3JlZW4tYWZ0ZXItbG9naW4ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRodWIlMjBQcm9qZWN0c1xcaW5zdXJhbmNlXFxzcmNcXGFwcFxcaG9tZS1wYWdlLXNjcmVlbi1hZnRlci1sb2dpblxcaG9tZS1wYWdlLXNjcmVlbi1hZnRlci1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE1BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDSEY7O0FES0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURTQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDTko7O0FEU0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtBQ1BKOztBRFNBO0VBRUksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNQSjs7QURTQTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNQSjs7QURTQTtFQUNJLHdDQUFBO0VBQ0EsK0NBQUE7QUNOSjs7QURlQTtFQUtJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNoQko7O0FEa0JBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNmSjs7QURpQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2RKOztBRGdCQTtFQUNJLGtCQUFBO0FDYko7O0FEZUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNaSjs7QURjQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VB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LFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ2pDSjs7QURrQ0U7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUNoQ0g7O0FEa0NFO0VBQ0ksbUJBQUE7QUNoQ047O0FEaUNNO0VBQ0UsY0FBQTtBQy9CUjs7QURrQ0U7RUFDQyxpQkFBQTtFQUNBLDZCQUFBO0FDaENIOztBRGtDRTtFQUNDLGdCQUFBO0VBQ0EsNEJBQUE7QUNoQ0g7O0FEd0NBO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FDckNGOztBRHlDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUN0Q0Y7O0FEeUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUN0Q0YiLCJmaWxlIjoiaG9tZS1wYWdlLXNjcmVlbi1hZnRlci1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVye1xyXG4vLyAgICAgd2lkdGg6IDg1JTtcclxuLy8gICAgIG1hcmdpbjowcHggYXV0bztcclxuLy8gfVxyXG5cclxuLnRvcC1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDAlIGF1dG87XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogMTUlIGF1dG87XHJcbn1cclxuLmNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzYuMDZweDtcclxuICAgIGhlaWdodDogMzYuMDZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNBOEI0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIHBhZGRpbmc6IDEuNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi8vIGltZy5jYW0taWNvbiB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDc4cHg7XHJcbi8vICAgICByaWdodDogNXB4O1xyXG4vLyB9XHJcbi5wcm8taW1ne1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnRpdGxlLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbn1cclxucC5uYW1lLXBhcmEge1xyXG4gICAgLy8gd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjQThCNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxucC53Yy1wYXJhIHtcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuaW9uLXNsaWRlc3tcclxuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kXHQ6d2hpdGUgIWltcG9ydGFudDtcclxuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5taWQtZGl2IHtcclxuICAvLyBoZWlnaHQ6IDE3MHB4O1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDEycHggNTZweCAxMnB4IDEycHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xyXG4gIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2IoMTY5IDE4NyA3MCAvIDE1JSk7XHJcbiAgLy8gbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4ubWlkLXN1Yi1kaXZ7XHJcbiAgICAvLyBkaXNwbGF5OmZsZXg7XHJcbiAgICAvLyBwYWRkaW5nOiAyMnB4IDE1LjVweCAxM3B4IDE0cHg7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDBweCA3cHggMTlweCA3cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbnAucDEge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbn1cclxucC5wMiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0E4QjQwMDtcclxufVxyXG4ucC1iYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNS41cHg7XHJcbn1cclxucC5wMyB7XHJcbiAgICBtYXJnaW46IDE1LjVweCAwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNUQ1RDVEO1xyXG59XHJcbmlvbi1idXR0b24uYnRuLXNte1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDcxcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxucC5taWQtcDEge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMxQTIwNkQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMC45cHg7XHJcbn1cclxucC5taWQtcDIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNBOEI0MDA7XHJcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuLmFycm93e1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogOXB4O1xyXG59XHJcbi5nYy1kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDNweDtcclxufVxyXG4uZ2ltZy1kaXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIC8vIGhlaWdodDogODVweDtcclxuICAgIC8vIHBhZGRpbmc6IDMxcHggMTdweCAzMHB4IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiKDE3NiAxODEgMCAvIDEwJSk7XHJcbn1cclxuLmNpbWd7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbnAuZ3AtZGl2IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNUQ1RDVEO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcbi5sc3QtZGl2IHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luOiAwcHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NiwxODEsMCwzMiUpO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYigxNjkgMTg3IDcwIC8gMTUlKTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxucC5sc3QtcGFyYSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMThweCAxNHB4O1xyXG59XHJcbi5saW1nLWRpdiB7XHJcbiAgICAvLyB3aWR0aDogNjklO1xyXG4gICAgLy8gdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgLy8gcGFkZGluZzogNnB4IDE3cHggMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5pbWd7XHJcbiAgd2lkdGg6IDIxLjVweDtcclxuICBoZWlnaHQ6IDIxLjVweDtcclxuICBvcGFjaXR5OiA2MCU7XHJcbn1cclxuLmFjdGl2ZWltZ3tcclxuXHJcbiAgICB3aWR0aDogMjEuNXB4O1xyXG4gICAgaGVpZ2h0OiAyMS41cHg7XHJcblxyXG59XHJcblxyXG4uZm9udHtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgb3BhY2l0eTogNjAlO1xyXG59XHJcbi5mb250YWN0aXZle1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uY2ltZ3tcclxuICBvcGFjaXR5OiA2MCV5O1xyXG59XHJcbmhye1xyXG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICByaWdodDogNDcuMiU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQxMnB4KSBhbmQgKG1pbi1oZWlnaHQ6OTE0cHgpe1xyXG4gIGhye1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICByaWdodDogNDcuMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDE0cHgpIGFuZCAobWluLWhlaWdodDo3MzZweCl7XHJcbiAgaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIHJpZ2h0OiA0Ny40JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDI1JSBhdXRvIDUlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLWhlaWdodDo4MTJweCl7XHJcbiAgaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIHJpZ2h0OiA0Ny4yJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSBhbmQgKG1pbi1oZWlnaHQ6NjY3cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAyNSUgYXV0byAxMiU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIGFuZCAobWluLWhlaWdodDo3NDBweCl7XHJcbiAgaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTVweDtcclxuICAgIHJpZ2h0OiA0Ny4yJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NjQwcHgpe1xyXG4gIGhye1xyXG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICByaWdodDogNDcuMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiAyNSUgYXV0byAxMiU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vL2JvdHRvbSBiYXIgY3NzLy8vL1xyXG4ubWQgaW9uLXRhYnN7XHJcblxyXG5cdGlvbi10YWItYmFyIHtcclxuXHRcdC0tYm9yZGVyOiAwO1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDowOyByaWdodDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggMHB4IDE2cHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MnB4O1xyXG4gICAgaGVpZ2h0OjYwcHg7XHJcblx0XHQmOmFmdGVye1xyXG5cdFx0XHRjb250ZW50OiBcIiBcIjtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHRcdFx0aGVpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDojMUEyMDZEO1xyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjojNDI0NzRGO1xyXG4gICAgICB9XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbi5jb21tZW50cyB7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMHB4O1xyXG5cdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcclxuXHRcdH1cclxuXHRcdGlvbi10YWItYnV0dG9uLm5vdGlmcyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG4vLy9ib3R0b20gYmFyIGNzcy8vLy9cclxuLmlvcyBpb24tdGFic3tcclxuXHJcblx0aW9uLXRhYi1iYXIge1xyXG4gICAgLS1ib3JkZXI6IDA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggMHB4IDE2cHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggNDVweCAwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG5cdFx0JjphZnRlcntcclxuXHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblx0XHRcdGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IzFBMjA2RDtcclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6IzQyNDc0RjtcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdFx0aW9uLXRhYi1idXR0b24uY29tbWVudHMge1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcclxuXHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XHJcblx0XHR9XHJcblx0XHRpb24tdGFiLWJ1dHRvbi5ub3RpZnMge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuLmlvcyAuY29udGFpbmVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAyOSUgMTclIDI0JSA4JTtcclxufVxyXG5cclxuXHJcbi5tZCAudG9wbWFyZ2lue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuXHJcbi5pb3MgLnRvcG1hcmdpbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEyJTtcclxufVxyXG4iLCIudG9wLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMCUgYXV0bztcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMTUlIGF1dG87XG59XG5cbi5jaXJjbGUge1xuICB3aWR0aDogMzYuMDZweDtcbiAgaGVpZ2h0OiAzNi4wNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI0E4QjQwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgcGFkZGluZzogMS41cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByby1pbWcge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4udGl0bGUtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4O1xufVxuXG5wLm5hbWUtcGFyYSB7XG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjQThCNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxucC53Yy1wYXJhIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kOndoaXRlICFpbXBvcnRhbnQ7XG4gIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTp3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubWlkLXN1Yi1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwcHggN3B4IDE5cHggN3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnAucDEge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzFBMjA2RDtcbn1cblxucC5wMiB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjQThCNDAwO1xufVxuXG4ucC1iYXIge1xuICBtYXJnaW4tdG9wOiAxNS41cHg7XG59XG5cbnAucDMge1xuICBtYXJnaW46IDE1LjVweCAwcHggMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNUQ1RDVEO1xufVxuXG5pb24tYnV0dG9uLmJ0bi1zbSB7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDcxcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjMUEyMDZEO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxucC5taWQtcDEge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzFBMjA2RDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAwLjlweDtcbn1cblxucC5taWQtcDIge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0E4QjQwMDtcbiAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLmFycm93IHtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA5cHg7XG59XG5cbi5nYy1kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5naW1nLWRpdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgxNzYsIDE4MSwgMCwgMC4xKTtcbn1cblxuLmNpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxucC5ncC1kaXYge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzVENUQ1RDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG5wLmxzdC1wYXJhIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM1RDVENUQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDE0cHg7XG59XG5cbi5pbWcge1xuICB3aWR0aDogMjEuNXB4O1xuICBoZWlnaHQ6IDIxLjVweDtcbiAgb3BhY2l0eTogNjAlO1xufVxuXG4uYWN0aXZlaW1nIHtcbiAgd2lkdGg6IDIxLjVweDtcbiAgaGVpZ2h0OiAyMS41cHg7XG59XG5cbi5mb250IHtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvcGFjaXR5OiA2MCU7XG59XG5cbi5mb250YWN0aXZlIHtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uY2ltZyB7XG4gIG9wYWNpdHk6IDYwJSB5O1xufVxuXG5ociB7XG4gIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU1cHg7XG4gIHJpZ2h0OiA0Ny4yJTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMnB4KSBhbmQgKG1pbi1oZWlnaHQ6IDkxNHB4KSB7XG4gIGhyIHtcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgcmlnaHQ6IDQ3LjIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkgYW5kIChtaW4taGVpZ2h0OiA3MzZweCkge1xuICBociB7XG4gICAgYmFja2dyb3VuZDogI0E4QjQwMDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1NXB4O1xuICAgIHJpZ2h0OiA0Ny40JTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogODUlO1xuICAgIG1hcmdpbjogMjUlIGF1dG8gNSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpIHtcbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICByaWdodDogNDcuMiU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1pbi1oZWlnaHQ6IDY2N3B4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAyNSUgYXV0byAxMiU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIGFuZCAobWluLWhlaWdodDogNzQwcHgpIHtcbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNBOEI0MDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTVweDtcbiAgICByaWdodDogNDcuMiU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KSB7XG4gIGhyIHtcbiAgICBiYWNrZ3JvdW5kOiAjQThCNDAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgcmlnaHQ6IDQ3LjIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAyNSUgYXV0byAxMiU7XG4gIH1cbn1cbi5tZCBpb24tdGFicyBpb24tdGFiLWJhciB7XG4gIC0tYm9yZGVyOiAwO1xuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDBweCAxNnB4IDBweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBtYXgtaGVpZ2h0OiA2MnB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4ubWQgaW9uLXRhYnMgaW9uLXRhYi1iYXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgaGVpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tZCBpb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxQTIwNkQ7XG59XG4ubWQgaW9uLXRhYnMgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogIzQyNDc0Rjtcbn1cbi5tZCBpb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbi5jb21tZW50cyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcbn1cbi5tZCBpb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbi5ub3RpZnMge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xufVxuXG4uaW9zIGlvbi10YWJzIGlvbi10YWItYmFyIHtcbiAgLS1ib3JkZXI6IDA7XG4gIC0tYmFja2dyb3VuZDogIzFBMjA2RDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAwcHggMTZweCAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDQ1cHggMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgbWF4LWhlaWdodDogNjVweDtcbiAgaGVpZ2h0OiA2MnB4O1xufVxuLmlvcyBpb24tdGFicyBpb24tdGFiLWJhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBoZWlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmlvcyBpb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxQTIwNkQ7XG59XG4uaW9zIGlvbi10YWJzIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6ICM0MjQ3NEY7XG59XG4uaW9zIGlvbi10YWJzIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uLmNvbW1lbnRzIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xufVxuLmlvcyBpb24tdGFicyBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbi5ub3RpZnMge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xufVxuXG4uaW9zIC5jb250YWluZXIge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDI5JSAxNyUgMjQlIDglO1xufVxuXG4ubWQgLnRvcG1hcmdpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLmlvcyAudG9wbWFyZ2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEyJTtcbn0iXX0= */";

/***/ }),

/***/ 19991:
/*!************************************************************************************************!*\
  !*** ./src/app/home-page-screen-after-login/home-page-screen-after-login.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobalafterlogin\">\r\n    <ion-row style=\"display: flex; align-items: center; padding-top: 5%\">\r\n      <ion-col size=\"8\" style=\"padding-left: 27px\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuicon.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"2\"></ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <img\r\n          *ngIf=\"loginas == 'user'\"\r\n          (click)=\"updateProfile()\"\r\n          class=\"pro-img\"\r\n          src=\"assets/images/user.png\"\r\n          alt=\"profile\"\r\n        />\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div style=\"background: #1a206d; height: 250px\">\r\n    <ion-row class=\"topmargin\">\r\n      <ion-col size=\"2\" style=\"padding-left: 27px\">\r\n        <ion-menu-toggle>\r\n          <ion-buttons>\r\n            <div style=\"width: 100%\">\r\n              <img src=\"assets/images/menuicon.svg\" alt=\"sb-btn\" />\r\n            </div>\r\n          </ion-buttons>\r\n        </ion-menu-toggle>\r\n      </ion-col>\r\n      <ion-col size=\"8\" style=\"text-align: center;\">\r\n        <img src=\"assets/images/cornerlogo.png\" style=\"width: 100px;\">\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n        <img *ngIf=\"loginas == 'user'\" (click)=\"updateProfile()\" class=\"pro-img\" src=\"assets/images/user.png\"\r\n          alt=\"profile\" />\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"top-container\">\r\n      <p class=\"name-para\">Hi {{username}},</p>\r\n      <p class=\"wc-para\">Welcome</p>\r\n\r\n      <div class=\"slide-div\">\r\n        <ion-slides pager=\"true\" [options]=\"slideOpts\" scrollbar=\"true\" (ionSlideDidChange)=\"active-slide\"\r\n          class=\"slides1\">\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n                <!-- <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar\r\n                    class=\"p-bar\"\r\n                    value=\"0.38\"\r\n                    style=\"--progress-background: #1a206d\"\r\n                  >\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\" (click)=\"learnmore()\"\r\n                    >Learn more</ion-button\r\n                  >\r\n                </div> -->\r\n\r\n                <div style=\"width: 100%\" (click)=\"learnmore()\">\r\n                  <img style=\"border-radius: 10px 50px 10px 10px\" class=\"ins-nce\" src=\"assets/images/slider/pt1.jpg\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n\r\n          <!-- <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n\r\n                <div style=\"width: 100%\" (click)=\"learnmore2()\">\r\n                  <img\r\n                    style=\"border-radius: 10px 50px 10px 10px\"\r\n                    class=\"ins-nce\"\r\n                    src=\"assets/images/slider/pt3.png\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide> -->\r\n\r\n          <ion-slide>\r\n            <div class=\"mid-div\" style=\"width: 99%\">\r\n              <div class=\"mid-sub-div\">\r\n                <!-- <div>\r\n                  <p class=\"p1\">Get Immediate</p>\r\n                  <p class=\"p2\">Claim assistance</p>\r\n                  <ion-progress-bar\r\n                    class=\"p-bar\"\r\n                    value=\"0.38\"\r\n                    style=\"--progress-background: #1a206d\"\r\n                  >\r\n                  </ion-progress-bar>\r\n                  <p class=\"p3\">We have got you covered</p>\r\n                  <ion-button class=\"btn-sm\" (click)=\"learnmore3()\"\r\n                    >Learn more</ion-button\r\n                  >\r\n                </div> -->\r\n                <div style=\"width: 100%\" (click)=\"learnmore3()\">\r\n                  <img style=\"border-radius: 10px 50px 10px 10px\" class=\"ins-nce\" src=\"assets/images/slider/pt2.jpg\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div style=\"display: flex; align-items: center\">\r\n      <p class=\"mid-p1\">PRODUCTS</p>\r\n      <!-- <p class=\"mid-p2\">See more <img class=\"arrow\" src=\"assets/images/down-arrow.svg\"> </p> -->\r\n    </div>\r\n\r\n    <ion-grid style=\"padding: 0px; width: 100%\">\r\n      <ion-row style=\"margin: 16px 0px\">\r\n        <!-- padding:6px 6px 6px 0px;  -->\r\n        <ion-col size=\"4\" style=\"width: 100%\" *ngFor=\"let p of products\">\r\n          <div class=\"gc-div\" (click)=\"openProduct(p,p.name)\">\r\n            <!-- (click)=\"openQuote(p)\" -->\r\n            <div class=\"gimg-div\">\r\n              <img *ngIf=\"p.name =='Travel Insurance'\" (error)=\"handleImgError($event, userIMG)\" src=\"{{p.image}}\"\r\n                alt=\"\" class=\"cimg\" />\r\n\r\n              <img *ngIf=\"p.name =='Motor Insurance'\" (error)=\"handleImgError2($event, userIMG)\" src=\"{{p.image}}\"\r\n                alt=\"\" class=\"cimg\" />\r\n              \r\n              <img *ngIf=\"p.name =='Investment plans'\" (error)=\"handleImgError2($event, userIMG)\" src=\"{{p.image}}\"\r\n                alt=\"\" class=\"cimg\" />\r\n            </div>\r\n            <p class=\"gp-div\">{{p.name}}</p>\r\n          </div>\r\n        </ion-col>\r\n        <!-- <ion-col siz=\"4\">\r\n          <div class=\"gc-div\" (click)=\"investmentsubProducts()\">\r\n            <div class=\"gimg-div\">\r\n              <img src=\"assets/images/investmentplan2.png\" alt=\"\" class=\"cimg\" />\r\n            </div>\r\n            <p class=\"gp-div\">Investment plans</p>\r\n          </div>\r\n        </ion-col> -->\r\n            <!-- (click)=\"openQuote(p)\" -->\r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div style=\"text-align: center; color: #1a206d; font-size: 20px\">\r\n      Insurance Tips\r\n    </div>\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" scrollbar=\"true\" (ionSlideDidChange)=\"active-slide\" class=\"slides2\">\r\n      <ion-slide style=\"margin: 10px\">\r\n        <div class=\"lst-div\">\r\n          <!-- <p class=\"lst-para\">\r\n            Are you aware you can lodge your claim online, renew your policy and\r\n            do more from any of our digital channels without visiting any of our\r\n            branches?\r\n          </p> -->\r\n          <div class=\"limg-div\">\r\n            <img style=\"border-radius: 10px\" src=\"assets/images/slider/it1.jpg\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide style=\"margin: 10px\">\r\n        <div class=\"lst-div\">\r\n          <!-- <p class=\"lst-para\">\r\n            Things just got better with Cornerstone! Investment products are now\r\n            available on our new mobile app.\r\n          </p> -->\r\n          <div class=\"limg-div\">\r\n            <img style=\"border-radius: 10px\" src=\"assets/images/slider/it2.jpg\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide style=\"margin: 10px\">\r\n        <div class=\"lst-div\">\r\n          <!-- <p class=\"lst-para\">\r\n            Do you know you can verify your policy using our mobile app? Here is\r\n            how, click on the VERIFY POLICY menu and select if your product is\r\n            general or life. Then you provide your policy number, its that\r\n            simple!\r\n          </p> -->\r\n          <div class=\"limg-div\">\r\n            <img style=\"border-radius: 10px\" src=\"assets/images/slider/it3.jpg\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-tabs style=\"top: 10px !important\">\r\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\r\n      <hr />\r\n      <ion-tab-button (click)=\"tab1Click()\">\r\n        <img src=\"assets/images/discover.svg\" class=\"img\" />\r\n        <ion-label class=\"font\">Discover</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"tab2Click()\">\r\n        <img src=\"assets/images/home.svg\" class=\"activeimg\" />\r\n        <ion-label class=\"fontactive\">Home</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"tab3Click()\">\r\n        <img src=\"assets/images/contactus.svg\" class=\"img\" />\r\n        <ion-label class=\"font\">Contact Us</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_home-page-screen-after-login_home-page-screen-after-login_module_ts.js.map